const testFolder = './Object_function';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});
console.log(fs.readdirSync(testFolder))