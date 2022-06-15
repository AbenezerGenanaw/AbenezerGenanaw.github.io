var modResponse = require('./function.js');

let array=[8,5,4,12,16,12];
let objArray={a:1,b:[1,2],c:"string",d:{x:1,y:2}};
let arrayOldYoung=[{name:'Ram',age:20},{name:'Lakshman',age:15}]

console.log("Number array divisible by 4",modResponse.findNumber(array));
console.log("Even array",modResponse.findEven(array));
console.log("Odd array",modResponse.findOdd(array));
console.log("Find Sum",modResponse.findSum(array));
console.log("Even Sum",modResponse.findEven(array));
console.log("Unique array",modResponse.findUniqueNum(array));
console.log("Array Element Type",modResponse.findGetType([50,"apple",{a:1}]));
console.log("Destructure Array",modResponse.DestructureArray([50,"apple",{a:1}]));
console.log("Index Of Array",modResponse.IndexOfOdd(array));
console.log("String to Array",modResponse.StringToArray("computer"));
console.log("String to Array",modResponse.ArrayToString(['computer']));
console.log("Object to Array",modResponse.ConvertObjectToArray(objArray));
console.log("Oldest Person is ",modResponse.FindOldestPerson(arrayOldYoung));
console.log("Youngest age ",modResponse.FindYoungestAge(arrayOldYoung));
console.log("Younger list",modResponse.FindYounger(arrayOldYoung));
