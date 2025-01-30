const path = require('path')
console.log(path.sep);

const filepath = path.join('/content','subfloder','test.txt')
console.log(filepath)

console.log((path.basename(filepath)));

const absolute = path.resolve(__dirname,'content','subfloder','test.txt')
console.log(absolute)