const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello fen');


console.log("first time")
setTimeout(() =>{
    console.log("second time")
},0)

console.log("third time")

