const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/r4.d.ts', 'utf8');

// Helper function to extract interface definition more precisely
function extractInterfaceDefinition(interfaceName) {
  // Find the interface start
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
  
  // Extract just the content between the braces
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
      
      // Skip readonly properties
      if (originalLine.includes('readonly')) {
        continue;
      }
      
      properties.push({
        name,
        type: type.replace(/\s*\|\s*undefined\s*$/, ''),
        optional: isOptional,
        comment: currentComment.substring(0, 200) // Limit comment length
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
  const decorators = [];
  
  // All properties are optional in FHIR
  decorators.push('@IsOptional()');
  
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
  
  // Handle union types (enums)
  if (type.includes('|') && type.includes("'")) {
    const values = type.match(/'[^']+'/g) || [];
    const cleanValues = values.map(v => v.replace(/'/g, ''));
    if (cleanValues.length > 0) {
      decorators.push(`@IsIn([${cleanValues.map(v => `'${v}'`).join(', ')}])`);
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
    // Complex type
    decorators.push('@ValidateNested()');
    decorators.push(`@Type(() => ${type})`);
  }
  
  return decorators;
}

// Generate class for a given interface
function generateElementClass(interfaceName, parentClass = 'Element') {
  const interfaceBody = extractInterfaceDefinition(interfaceName);
  if (!interfaceBody) {
    console.log(`Could not find interface definition for ${interfaceName}`);
    return null;
  }
  
  const properties = parseProperties(interfaceBody);
  
  const imports = new Set();
  
  // Collect imports from property types
  properties.forEach(prop => {
    let type = prop.type.replace('[]', '').trim();
    
    // Remove union with undefined
    type = type.replace(/\s*\|\s*undefined\s*$/, '');
    
    // Skip primitive types and complex union types
    if (!['string', 'number', 'boolean', 'any'].includes(type) && 
        !type.includes("'") && 
        !type.includes('|') && 
        type !== 'Element') {
      imports.add(type);
    }
  });
  
  let classContent = `import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';`;

  // Add additional imports
  imports.forEach(imp => {
    if (imp !== 'Element' && imp !== parentClass) {
      if (['BackboneElement'].includes(imp)) {
        classContent += `\nimport { ${imp} } from '../base/${imp}';`;
      } else {
        classContent += `\nimport { ${imp} } from './${imp}';`;
      }
    }
  });
  
  classContent += `\nimport * as fhir from '../r4';\n\n`;
  
  // Extract comment for the interface
  const interfaceCommentMatch = content.match(new RegExp(`/\\*\\*([\\s\\S]*?)\\*/\\s*export interface ${interfaceName}(?:\\s+extends)`));
  const interfaceComment = interfaceCommentMatch ? interfaceCommentMatch[1].replace(/^\s*\*\s?/gm, '').trim().substring(0, 300) : '';
  
  // Class definition
  classContent += `/**\n * ${interfaceComment || interfaceName}\n */\nexport class ${interfaceName} extends ${parentClass} implements fhir.${interfaceName} {\n`;
  
  // Generate properties
  properties.forEach(prop => {
    if (prop.comment) {
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
  classContent += `  }\n`;
  classContent += `}\n`;
  
  return classContent;
}

// Core element types that extend Element directly (excluding complex ones for now)
const coreElementTypes = [
  'Address', 'Annotation', 'Attachment', 'CodeableConcept', 'Coding', 
  'ContactPoint', 'HumanName', 'Identifier', 'Meta', 'Money', 'Narrative', 
  'Period', 'Quantity', 'Range', 'Ratio', 'Reference'
];

// Generate core element classes first
console.log('Generating core element classes...');
coreElementTypes.forEach(elementType => {
  const classContent = generateElementClass(elementType);
  if (classContent) {
    const filePath = path.join('src', 'elements', `${elementType}.ts`);
    fs.writeFileSync(filePath, classContent);
    console.log(`Generated ${elementType}.ts`);
  }
});

console.log(`Generated ${coreElementTypes.length} core element classes!`);