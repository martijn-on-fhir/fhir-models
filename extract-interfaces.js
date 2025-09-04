const fs = require('fs');
const path = require('path');

// Read the r4.d.ts file
const r4Content = fs.readFileSync('src/r4.d.ts', 'utf8');

// Regular expression to match interface definitions with their JSDoc comments
const interfaceRegex = /(?:\/\*\*[\s\S]*?\*\/\s*)?export interface\s+(\w+)(?:<[^>]*>)?(?:\s+extends\s+([\w\s,<>|&\[\]]+))?\s*\{[\s\S]*?^\}/gm;

// Function to extract interface name from extends clause
function parseExtends(extendsClause) {
  if (!extendsClause) return [];
  // Handle complex extends like "BundleEntry<BundleContentType = FhirResource>"
  return extendsClause.split(',').map(ext => {
    // Extract just the interface name, ignoring generics
    const match = ext.trim().match(/^(\w+)/);
    return match ? match[1] : null;
  }).filter(Boolean);
}

// Function to extract all interface dependencies from the interface body
function extractDependencies(interfaceBody) {
  const dependencies = new Set();
  
  // Look for interface references in property types
  const typeReferences = interfaceBody.match(/:\s*([A-Z]\w*(?:\[\])?)/g) || [];
  typeReferences.forEach(match => {
    const typeName = match.replace(/^:\s*/, '').replace(/\[\]$/, '');
    if (typeName && /^[A-Z]/.test(typeName)) {
      dependencies.add(typeName);
    }
  });
  
  // Look for union types and optional generic references
  const complexTypes = interfaceBody.match(/[:|&]\s*([A-Z]\w*)/g) || [];
  complexTypes.forEach(match => {
    const typeName = match.replace(/^[:|&]\s*/, '');
    if (typeName && /^[A-Z]/.test(typeName)) {
      dependencies.add(typeName);
    }
  });
  
  return Array.from(dependencies);
}

// Parse all interfaces
const interfaces = [];
let match;

while ((match = interfaceRegex.exec(r4Content)) !== null) {
  const fullMatch = match[0];
  const interfaceName = match[1];
  const extendsClause = match[2];
  
  // Extract JSDoc comment
  const jsdocMatch = fullMatch.match(/\/\*\*[\s\S]*?\*\//);
  const jsdoc = jsdocMatch ? jsdocMatch[0] : '';
  
  // Extract interface body (everything between the first { and last })
  const bodyStart = fullMatch.indexOf('{');
  const bodyEnd = fullMatch.lastIndexOf('}');
  const interfaceBody = fullMatch.substring(bodyStart + 1, bodyEnd);
  
  // Parse extends relationships
  const extendsInterfaces = parseExtends(extendsClause);
  
  // Extract dependencies from the interface body
  const dependencies = extractDependencies(interfaceBody);
  
  interfaces.push({
    name: interfaceName,
    fullDefinition: fullMatch,
    jsdoc,
    extends: extendsInterfaces,
    dependencies: dependencies.filter(dep => dep !== interfaceName), // Remove self-references
    body: interfaceBody
  });
}

console.log(`Found ${interfaces.length} interfaces`);

// Create interfaces directory if it doesn't exist
if (!fs.existsSync('interfaces')) {
  fs.mkdirSync('interfaces');
}

// Generate individual interface files
interfaces.forEach(iface => {
  const fileName = `${iface.name}.ts`;
  const filePath = path.join('interfaces', fileName);
  
  // Calculate imports needed
  const allImports = [...iface.extends, ...iface.dependencies];
  const uniqueImports = [...new Set(allImports)].sort();
  
  // Generate import statements
  const imports = uniqueImports
    .filter(imp => imp !== iface.name) // Don't import self
    .map(imp => `import { ${imp} } from './${imp}';`)
    .join('\n');
  
  // Build the file content
  let fileContent = '';
  
  if (imports) {
    fileContent += imports + '\n\n';
  }
  
  if (iface.jsdoc) {
    fileContent += iface.jsdoc + '\n';
  }
  
  // Reconstruct the interface declaration
  let interfaceDeclaration = `export interface ${iface.name}`;
  if (iface.extends.length > 0) {
    interfaceDeclaration += ` extends ${iface.extends.join(', ')}`;
  }
  interfaceDeclaration += ` {\n${iface.body}\n}`;
  
  fileContent += interfaceDeclaration;
  
  fs.writeFileSync(filePath, fileContent, 'utf8');
});

// Generate index.ts file
const indexContent = interfaces
  .map(iface => `export { ${iface.name} } from './${iface.name}';`)
  .join('\n');

fs.writeFileSync('interfaces/index.ts', indexContent, 'utf8');

console.log(`Generated ${interfaces.length} interface files and index.ts`);
console.log('Interface extraction completed!');