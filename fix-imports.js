const fs = require('fs');
const path = require('path');

// Get all files in backbone and resources directories
function getFilesInDirectory(dir) {
  const files = [];
  const dirPath = path.join('src', dir);
  
  if (fs.existsSync(dirPath)) {
    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
      if (entry.endsWith('.ts') && entry !== 'index.ts') {
        files.push(entry.replace('.ts', ''));
      }
    }
  }
  
  return files;
}

const backboneElements = getFilesInDirectory('backbone');
const elements = getFilesInDirectory('elements');
const resources = getFilesInDirectory('resources');

console.log(`Found ${backboneElements.length} backbone elements`);
console.log(`Found ${elements.length} elements`);
console.log(`Found ${resources.length} resources`);

// Fix backbone files
console.log('Fixing backbone imports...');
backboneElements.forEach(fileName => {
  const filePath = path.join('src', 'backbone', fileName + '.ts');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace incorrect imports from elements to backbone
  backboneElements.forEach(backboneEl => {
    if (backboneEl !== fileName) {
      const wrongImport = `import { ${backboneEl} } from '../elements/${backboneEl}';`;
      const correctImport = `import { ${backboneEl} } from './${backboneEl}';`;
      content = content.replace(wrongImport, correctImport);
    }
  });
  
  // Fix missing Timing and Dosage imports
  if (content.includes('Timing') && !content.includes("import { Timing }")) {
    content = content.replace("import { BackboneElement } from '../base/BackboneElement';", 
      "import { BackboneElement } from '../base/BackboneElement';\nimport { Timing } from './Timing';");
  }
  
  if (content.includes('Dosage') && !content.includes("import { Dosage }")) {
    content = content.replace("import { BackboneElement } from '../base/BackboneElement';", 
      "import { BackboneElement } from '../base/BackboneElement';\nimport { Dosage } from './Dosage';");
  }
  
  fs.writeFileSync(filePath, content);
});

// Fix resource files
console.log('Fixing resource imports...');
resources.forEach(fileName => {
  const filePath = path.join('src', 'resources', fileName + '.ts');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace incorrect imports from elements to backbone for backbone elements
  backboneElements.forEach(backboneEl => {
    const wrongImport = `import { ${backboneEl} } from '../elements/${backboneEl}';`;
    const correctImport = `import { ${backboneEl} } from '../backbone/${backboneEl}';`;
    content = content.replace(wrongImport, correctImport);
  });
  
  // Fix FhirResource import issue
  content = content.replace("import { FhirResource } from '../elements/FhirResource';", "// Resource reference");
  content = content.replace("FhirResource[]", "any[]"); // Temporary fix
  
  // Fix Element import in Patient and other files
  if (content.includes('@Type(() => Element)') && !content.includes('import { Element }')) {
    content = content.replace("import { Element } from '../base/Element';", ""); // Remove if exists
    content = content.replace("import { DomainResource } from '../base/DomainResource';", 
      "import { DomainResource } from '../base/DomainResource';\nimport { Element } from '../base/Element';");
    content = content.replace("import { Resource } from '../base/Resource';", 
      "import { Resource } from '../base/Resource';\nimport { Element } from '../base/Element';");
  }
  
  fs.writeFileSync(filePath, content);
});

console.log('Import fixes completed!');