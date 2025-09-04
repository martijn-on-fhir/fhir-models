const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/r4.d.ts', 'utf8');

// Helper function to extract interface definition
function extractInterfaceDefinition(interfaceName) {
  const regex = new RegExp(`export interface ${interfaceName}[^{]*\\{([\\s\\S]*?)\\n\\}`);
  const match = content.match(regex);
  if (!match) return null;
  
  return match[1];
}

// Helper function to parse properties from interface body
function parseProperties(interfaceBody) {
  const properties = [];
  const lines = interfaceBody.split('\n');
  
  let currentComment = '';
  let currentProperty = null;
  
  for (let line of lines) {
    line = line.trim();
    
    // Skip empty lines
    if (!line) continue;
    
    // Collect comments
    if (line.startsWith('/**') || line.startsWith('*') || line.startsWith('*/')) {
      if (line.includes('/**')) {
        currentComment = line.replace('/**', '').replace('*/', '').trim();
      } else if (line.includes('*/')) {
        // End of comment block
      } else if (line.startsWith('*')) {
        const commentLine = line.replace(/^\*\s?/, '');
        if (commentLine) {
          currentComment += (currentComment ? ' ' : '') + commentLine;
        }
      }
      continue;
    }
    
    // Parse property definition
    const propMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\??\s*:\s*(.+?);?\s*$/);
    if (propMatch) {
      const [, name, type] = propMatch;
      const isOptional = line.includes('?');
      
      properties.push({
        name,
        type: type.replace(/\s*\|\s*undefined\s*$/, ''),
        optional: isOptional,
        comment: currentComment
      });
      
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
  
  // Handle union types (enums)
  if (type.includes('|') && type.includes("'")) {
    const values = type.split('|').map(v => v.trim().replace(/'/g, ''));
    decorators.push(`@IsIn([${values.map(v => `'${v}'`).join(', ')}])`);
    return decorators;
  }
  
  // Handle primitive types
  if (type === 'string') {
    decorators.push('@IsString()');
  } else if (type === 'number') {
    decorators.push('@IsNumber()');
  } else if (type === 'boolean') {
    decorators.push('@IsBoolean()');
  } else {
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
  
  const imports = new Set(['Element']);
  if (parentClass !== 'Element') {
    imports.add(parentClass);
  }
  
  // Collect imports from property types
  properties.forEach(prop => {
    const type = prop.type.replace('[]', '');
    if (type !== 'string' && type !== 'number' && type !== 'boolean' && !type.includes("'")) {
      imports.add(type);
    }
  });
  
  let classContent = `import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';`;

  // Add additional imports
  imports.forEach(imp => {
    if (imp !== 'Element') {
      if (['BackboneElement'].includes(imp)) {
        classContent += `\nimport { ${imp} } from '../base/${imp}';`;
      } else if (!['string', 'number', 'boolean'].includes(imp) && !imp.includes("'")) {
        classContent += `\nimport { ${imp} } from './${imp}';`;
      }
    }
  });
  
  classContent += `\nimport * as fhir from '../r4';\n\n`;
  
  // Extract comment for the interface
  const interfaceCommentMatch = content.match(new RegExp(`/\\*\\*([\\s\\S]*?)\\*/\\s*export interface ${interfaceName}`));
  const interfaceComment = interfaceCommentMatch ? interfaceCommentMatch[1].replace(/^\s*\*\s?/gm, '').trim() : '';
  
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

// Get list of element types (extends Element but not BackboneElement)
const elementTypes = [
  'Address', 'Annotation', 'Attachment', 'CodeableConcept', 'Coding', 'ContactDetail', 
  'ContactPoint', 'Contributor', 'DataRequirement', 'Expression', 'Extension', 
  'HumanName', 'Identifier', 'Meta', 'Money', 'Narrative', 'ParameterDefinition', 
  'Period', 'Quantity', 'Range', 'Ratio', 'Reference', 'RelatedArtifact', 
  'SampledData', 'Signature', 'TriggerDefinition', 'UsageContext'
];

// Generate all element classes
console.log('Generating element classes...');
elementTypes.forEach(elementType => {
  const classContent = generateElementClass(elementType);
  if (classContent) {
    const filePath = path.join('src', 'elements', `${elementType}.ts`);
    fs.writeFileSync(filePath, classContent);
    console.log(`Generated ${elementType}.ts`);
  }
});

console.log(`Generated ${elementTypes.length} element classes!`);