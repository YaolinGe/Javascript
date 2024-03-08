const fs = require('fs');  // file system
const path = require('path'); // path module

const directories = ['w1', 'w2', 'w3', 'project'];
const componentsPath = path.join(__dirname, 'src');

const componentsList = {};

directories.forEach(dir => {
  const fullPath = path.join(componentsPath, dir);
  const files = fs.readdirSync(fullPath);
  componentsList[dir] = files.filter(file => file.endsWith('.js')).map(file => file.replace('.js', ''));
});

fs.writeFileSync(path.join(componentsPath, 'componentsList.json'), JSON.stringify(componentsList, null, 2));
