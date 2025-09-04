const fs = require('fs');
const path = require('path');

// Get all generated backbone files
const backboneDir = path.join('src', 'backbone');
const files = fs.readdirSync(backboneDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts')
  .map(file => file.replace('.ts', ''))
  .sort();

let indexContent = '// Backbone element types\n';
files.forEach(file => {
  indexContent += `export { ${file} } from './${file}';\n`;
});

fs.writeFileSync(path.join(backboneDir, 'index.ts'), indexContent);
console.log(`Generated backbone index with ${files.length} exports`);