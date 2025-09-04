const fs = require('fs');
const path = require('path');

// Function to fix required properties in a file
function fixRequiredProperties(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Find all lines with properties that have no optional marker (?) and no default value
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a property declaration
    const propMatch = line.match(/^\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.+);?\s*$/);
    if (propMatch && !line.includes('?') && !line.includes('readonly') && !line.includes('=')) {
      const [, propName, propType] = propMatch;
      
      // Skip constructor and method declarations
      if (!propName.includes('(') && !line.includes('constructor')) {
        // Make the property optional by adding ?
        const fixedLine = line.replace(`${propName}:`, `${propName}?:`);
        newLines.push(fixedLine);
        modified = true;
      } else {
        newLines.push(line);
      }
    } else {
      newLines.push(line);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    return true;
  }
  
  return false;
}

// Fix all files in backbone and resources directories
const directories = ['backbone', 'resources'];

directories.forEach(dir => {
  const dirPath = path.join('src', dir);
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    
    console.log(`Fixing required properties in ${dir}...`);
    let fixedCount = 0;
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fixRequiredProperties(filePath)) {
        fixedCount++;
      }
    });
    
    console.log(`Fixed ${fixedCount} files in ${dir}`);
  }
});

console.log('Required property fixes completed!');