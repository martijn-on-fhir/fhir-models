const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/r4.d.ts', 'utf8');

// Get all Resource and DomainResource types
function getResourceTypes() {
  const interfaceRegex = /export interface (\w+)(\s+extends\s+(\w+))?\s*\{/g;
  const interfaces = [];
  let match;

  while ((match = interfaceRegex.exec(content)) !== null) {
    const [, name, , parent] = match;
    if (parent === 'Resource' || parent === 'DomainResource') {
      interfaces.push({ name, parent });
    }
  }
  
  return interfaces;
}

// Helper function to extract interface definition
function extractInterfaceDefinition(interfaceName) {
  const interfaceStartRegex = new RegExp(`export interface ${interfaceName}(\\s+extends\\s+\\w+)?\\s*\\{`);
  const startMatch = content.match(interfaceStartRegex);
  if (!startMatch) return null;
  
  const startIndex = content.indexOf(startMatch[0]);
  const braceStart = content.indexOf('{', startIndex);
  
  // Find the matching closing brace
  let braceCount = 0;
  let endIndex = braceStart;
  
  for (let i = braceStart; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    
    if (braceCount === 0) {
      endIndex = i;
      break;
    }
  }
  
  const interfaceBody = content.substring(braceStart + 1, endIndex);
  return interfaceBody;
}

// Helper function to parse properties from interface body
function parseProperties(interfaceBody) {
  const properties = [];
  const lines = interfaceBody.split('\n');
  
  let currentComment = '';
  let inComment = false;
  
  for (let line of lines) {
    const originalLine = line;
    line = line.trim();
    
    // Skip empty lines
    if (!line) {
      currentComment = '';
      continue;
    }
    
    // Handle comment blocks
    if (line.startsWith('/**')) {
      inComment = true;
      currentComment = line.replace('/**', '').replace('*/', '').trim();
      if (line.includes('*/')) {
        inComment = false;
      }
      continue;
    }
    
    if (inComment) {
      if (line.includes('*/')) {
        inComment = false;
        const commentPart = line.replace('*/', '').replace(/^\*\s?/, '').trim();
        if (commentPart) {
          currentComment += (currentComment ? ' ' : '') + commentPart;
        }
      } else {
        const commentPart = line.replace(/^\*\s?/, '').trim();
        if (commentPart) {
          currentComment += (currentComment ? ' ' : '') + commentPart;
        }
      }
      continue;
    }
    
    // Skip single line comments
    if (line.startsWith('//')) {
      continue;
    }
    
    // Parse property definition
    const propMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\??\s*:\s*(.+?);?\s*$/);
    if (propMatch) {
      const [, name, type] = propMatch;
      const isOptional = line.includes('?');
      
      // Skip readonly resourceType property
      if (name === 'resourceType' && originalLine.includes('readonly')) {
        continue;
      }
      
      properties.push({
        name,
        type: type.replace(/\s*\|\s*undefined\s*$/, ''),
        optional: isOptional,
        comment: currentComment.substring(0, 120)
      });
      
      currentComment = '';
    } else {
      currentComment = '';
    }
  }
  
  return properties;
}

// Helper function to convert TypeScript type to validator decorator
function getValidatorDecorators(type, name) {
  const decorators = ['@IsOptional()'];
  
  // Handle arrays
  if (type.includes('[]')) {
    decorators.push('@IsArray()');
    const baseType = type.replace('[]', '').trim();
    
    if (baseType === 'string') {
      decorators.push('@IsString({ each: true })');
    } else {
      decorators.push('@ValidateNested({ each: true })');
      decorators.push(`@Type(() => ${baseType})`);
    }
    return decorators;
  }
  
  // Handle union types with string literals (enums)
  if (type.includes('|') && type.includes("'")) {
    const values = type.match(/'[^']+'/g) || [];
    const cleanValues = values.map(v => v.replace(/'/g, ''));
    if (cleanValues.length > 0 && cleanValues.length < 15) {
      decorators.push(`@IsIn([${cleanValues.map(v => `'${v}'`).join(', ')}])`);
    } else {
      decorators.push('@IsString()');
    }
    return decorators;
  }
  
  // Handle primitive types
  if (type === 'string') {
    decorators.push('@IsString()');
  } else if (type === 'number') {
    decorators.push('@IsNumber()');
  } else if (type === 'boolean') {
    decorators.push('@IsBoolean()');
  } else if (type !== 'any' && !type.includes('|') && !type.includes('undefined')) {
    decorators.push('@ValidateNested()');
    decorators.push(`@Type(() => ${type})`);
  }
  
  return decorators;
}

// Get required imports for a type
function getImportForType(type) {
  const cleanType = type.replace('[]', '').replace(/\s*\|\s*undefined\s*$/, '');
  
  if (['string', 'number', 'boolean', 'any'].includes(cleanType) || 
      cleanType.includes("'") || 
      cleanType.includes('|')) {
    return null;
  }
  
  return cleanType;
}

// Generate class for a Resource
function generateResourceClass(interfaceName, parentClass) {
  const interfaceBody = extractInterfaceDefinition(interfaceName);
  if (!interfaceBody) {
    console.log(`Could not find interface definition for ${interfaceName}`);
    return null;
  }
  
  const properties = parseProperties(interfaceBody);
  const imports = new Set();
  
  // Collect imports from property types
  properties.forEach(prop => {
    const importType = getImportForType(prop.type);
    if (importType && importType !== 'Element' && importType !== interfaceName) {
      imports.add(importType);
    }
  });
  
  let classContent = `import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { ${parentClass} } from '../base/${parentClass}';`;

  // Add additional imports
  const sortedImports = Array.from(imports).sort();
  sortedImports.forEach(imp => {
    if (imp !== parentClass) {
      if (['Element', 'Resource', 'DomainResource', 'BackboneElement'].includes(imp)) {
        classContent += `\nimport { ${imp} } from '../base/${imp}';`;
      } else if (imp.includes('BackboneElement') || imp.includes('BackboneElement')) {
        classContent += `\nimport { ${imp} } from '../backbone/${imp}';`;
      } else {
        classContent += `\nimport { ${imp} } from '../elements/${imp}';`;
      }
    }
  });
  
  classContent += `\nimport * as fhir from '../r4';\n\n`;
  
  // Extract comment for the interface
  const interfaceCommentMatch = content.match(new RegExp(`/\\*\\*([\\s\\S]*?)\\*/\\s*export interface ${interfaceName}(?:\\s+extends)`));
  const interfaceComment = interfaceCommentMatch ? interfaceCommentMatch[1].replace(/^\s*\*\s?/gm, '').trim().substring(0, 150) : '';
  
  // Class definition
  classContent += `/**\n * ${interfaceComment || interfaceName}\n */\nexport class ${interfaceName} extends ${parentClass} implements fhir.${interfaceName} {\n`;
  
  // Add readonly resourceType property
  classContent += `  /**\n   * Resource Type Name (for serialization)\n   */\n`;
  classContent += `  readonly resourceType = '${interfaceName}' as const;\n\n`;
  
  // Generate properties (limit to 25 to keep files manageable)
  const limitedProperties = properties.slice(0, 25);
  
  limitedProperties.forEach(prop => {
    if (prop.comment && prop.comment.length > 0) {
      classContent += `  /**\n   * ${prop.comment}\n   */\n`;
    }
    
    const decorators = getValidatorDecorators(prop.type, prop.name);
    decorators.forEach(decorator => {
      classContent += `  ${decorator}\n`;
    });
    
    classContent += `  ${prop.name}${prop.optional ? '?' : ''}: ${prop.type};\n\n`;
  });
  
  // Constructor
  classContent += `  /**\n   * Constructor for ${interfaceName}\n   */\n`;
  classContent += `  constructor(source: Partial<${interfaceName}> = {}) {\n`;
  classContent += `    super(source);\n`;
  classContent += `    this.resourceType = '${interfaceName}';\n`;
  classContent += `  }\n`;
  classContent += `}\n`;
  
  return classContent;
}

// Get all Resource types
const resourceTypes = getResourceTypes();
console.log(`Found ${resourceTypes.length} Resource types`);

// Generate classes in batches
const batchSize = 25;
const totalBatches = Math.ceil(resourceTypes.length / batchSize);

for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
  const startIndex = batchIndex * batchSize;
  const endIndex = Math.min(startIndex + batchSize, resourceTypes.length);
  const batch = resourceTypes.slice(startIndex, endIndex);
  
  console.log(`\\nGenerating batch ${batchIndex + 1}/${totalBatches} (${batch.length} classes)...`);
  
  batch.forEach(resourceType => {
    const classContent = generateResourceClass(resourceType.name, resourceType.parent);
    if (classContent) {
      const filePath = path.join('src', 'resources', `${resourceType.name}.ts`);
      fs.writeFileSync(filePath, classContent);
      console.log(`Generated ${resourceType.name}.ts`);
    }
  });
}

console.log(`\\nGenerated ${resourceTypes.length} Resource classes!`);