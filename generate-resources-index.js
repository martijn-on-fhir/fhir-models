const fs = require('fs');
const path = require('path');

// Get all generated resource files
const resourcesDir = path.join('src', 'resources');
const files = fs.readdirSync(resourcesDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts')
  .map(file => file.replace('.ts', ''))
  .sort();

let indexContent = '// Resource types\n';
files.forEach(file => {
  indexContent += `export { ${file} } from './${file}';\n`;
});

fs.writeFileSync(path.join(resourcesDir, 'index.ts'), indexContent);
console.log(`Generated resources index with ${files.length} exports`);