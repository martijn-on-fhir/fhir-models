const fs = require('fs');

const content = fs.readFileSync('src/r4.d.ts', 'utf8');

// Extract all interfaces
const interfaceRegex = /export interface (\w+)(\s+extends\s+(\w+))?\s*\{/g;
const interfaces = [];
let match;

while ((match = interfaceRegex.exec(content)) !== null) {
  const [, name, , parent] = match;
  interfaces.push({ name, parent: parent || 'none' });
}

console.log('Total interfaces:', interfaces.length);

// Categorize interfaces
const elements = interfaces.filter(i => i.parent === 'Element');
const resources = interfaces.filter(i => i.parent === 'Resource' || i.parent === 'DomainResource');
const backbones = interfaces.filter(i => i.parent === 'BackboneElement');
const quantities = interfaces.filter(i => i.parent === 'Quantity');
const others = interfaces.filter(i => !['Element', 'Resource', 'DomainResource', 'BackboneElement', 'Quantity'].includes(i.parent) && 
  !['Element', 'Resource', 'DomainResource', 'BackboneElement'].includes(i.name));

console.log('\nCategories:');
console.log('Elements (extends Element):', elements.length);
console.log('Resources (extends Resource/DomainResource):', resources.length);  
console.log('BackboneElements (extends BackboneElement):', backbones.length);
console.log('Quantities (extends Quantity):', quantities.length);
console.log('Others:', others.length);

console.log('\nElement types:');
elements.forEach(e => console.log('  ' + e.name));

console.log('\nQuantity types:');
quantities.forEach(e => console.log('  ' + e.name));