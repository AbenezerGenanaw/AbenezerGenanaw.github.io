//Numbers divisible by 4

let array = [3,4,5,8,9,10,4,12,3,5]

//divisible by 4
function number(array){
 var temp = [];
 for(let i = 0; i < array.length; i++){
        if(array[i] % 4 === 0){
        temp.push(array[i]);
        }
    }
 return temp;   
 
}
console.log(number(array));

//Even Numbers
function even(array){
   let temp = [];

for(let value of array){
    if(value %2 == 0){
        temp.push(value);
    }
}
return temp;

}
console.log(even(array));


//Odd Numbers
function odd(array){

    let temp = [];

    for(let item of array){
        if(item % 2 !=0){
            temp.push(item);
        }   
    }
    return temp;
}

// odd(a);
console.log(odd(array))


//Sum of all numbers
function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
           if(array[i] % 4 == 0){
             sum += array[i];
           //temp.push(array[i]);
           }
       }
    return sum;   
    
   }
   console.log(sum(array));

//Sum of Odd
 function sumOfOdd(array){
     let sum = 0;
     for (let odd of array) {
         if(odd %2 !== 0){
             sum += odd;
         }
     }
      return sum; 
   }

   console.log(sumOfOdd(array));


   //Sum of Even
function sumOfEven(){

   let sum = 0;
    for(let value of array){
        if(value %2 == 0){
          sum+=value;
        }
    }
    return sum;
    
    }

    console.log(sumOfEven());

    //Find the Unique Number in the Array


    function UniqueNum(array){

        let temp = [];
        let index = 0;
        
        for(let i = 0; i < array.length; i++){
             let count = 0;
             for(let j = 0; j<i; j++)
               if(array[i]==array[j]){
                    count = 1;
                    break
               }

      if(count == 0){
          temp.push(array[i])
          //index++;
      }

        }
return temp;
    }

    //let c = [1,2,3,4,2,4,3,5,6,7,8,8,9,10,11,11,3,5,12];
    console.log(UniqueNum(array));

function getTypes(array){

    let temp = [];
    for(let key of array){
        temp.push(typeof key)
    }

return temp;
}

console.log(getTypes([50,"apple",{a:1}]));
    
    function destructureArray(array){

       let obj = {};
       let objVal = ""
       for(let i = 0; i < array.length; i++){
    
        objVal = typeof array[i] + i;
        obj[objVal] = array[i];
       }

       return obj;
    }

    console.log(destructureArray([50,"apple",{a:1}]));

    
 function indexOfOdd(array){
   for(let i =0; i < array.length; i++){
      if(array[i] %2 == 1)
      return i;
   }

 }

 console.log(indexOfOdd(array));

 //converting String to Array
let inString="computer";
function strToArray(inString){
    let strArray=[];
    let tempStr="";
    for( let i=0;i<inString.length;i++){
        if(inString.charAt(i)==''){
            strArray.push(tempStr);
            tempStr=" ";
            continue;
        }
        tempStr+=inString.charAt(i);
    }
    strArray.push(tempStr);
    return strArray
}
console.log(strToArray(inString))

//Array to String
let inArr=['computer']
function arrayToString(inArr){
    let tempStr=""
    for(let i=0;i<inArr.length;i++){
        tempStr+=inArr[i];
    }
    return tempStr;
}
console.log(arrayToString(inArr))

//converting Object to String
let objArray={a:1,b:[1,2],c:"string",d:{x:1,y:2}};
function convertObjectToArray(objArray){
let tempArr=[];
for( const keys in objArray){
    let begin=objArray[keys];
    if(typeof begin!="object"){
    tempArr.push(keys+begin);
}else if(Array.isArray(begin)){
    tempArr.push(keys+convertObjectToArray(begin))
}else if(typeof begin=="object"){
    let joinThem="";
    joinThem+=keys;
    iteratingObject(tempArr,joinThem,begin)
}
}
return tempArr;
}

function iteratingObject(temp, joinThem, begin) {
    let condition = true;
    for (const key in begin) {
        let ownKey = joinThem + key;
        let ownValue = begin[key];
        if (typeof ownValue != "object") {
            temp.push(ownKey + ownValue)
        } else {
            condition = true;
            while (condition) {
                iteratingObject(temp, ownKey, ownValue);
            }
        }
    }
}

    let arrayOldYoung=[{name:'Ram',age:20},{name:'Lakshman',age:15}]
    function findOldestPerson(arrayOldYoung) {
    let temp = {};
    for (let i = 0; i < arrayOldYoung.length; i++) {
            let item = arrayOldYoung[i];
            let isObject = (typeof item == "object");
    if (i == 0) {
                for (const key in item) {
                    temp[key] = item[key];
                }
            } else {
        
                if (temp.age < item.age) {
                    for (const key in item) {
                        temp[key] = item[key];
                    }
                }
            }
        }
    return temp.name ;
    }
    console.log(findOldestPerson(arrayOldYoung))

    function findYoungestAge(arrarrayOldYoungay) {
        let temp = {};
       for (let i = 0; i < arrayOldYoung.length; i++) {
               let item = arrayOldYoung[i];
               let isObject = (typeof item == "object");
       if (i == 0) {
                   for (const key in item) {
                       temp[key] = item[key];
                   }
               } else {
                   if (temp.age > item.age) {
                       for (const key in item) {
                           temp[key] = item[key];
                       }
                   }
               }
           }
       return temp.age;
       }
       console.log(findYoungestAge(arrayOldYoung))

       function findYounger(arrayOldYoung) {
        let list = [];
            for (let i = 0; i < arrayOldYoung.length; i++) {
                let obj = arrayOldYoung[i];
               if (obj.age > 14 && obj.age < 17) {
                    let temp = {};
                    for (let key in obj) {
                        temp[key] = obj[key];
                    }
                   list.push(temp);
                }
            }
         return list;
        }
        console.log(findYounger(arrayOldYoung))


        module.exports={findNumber:number,findOdd:odd, findSum:sum, findEven: sumOfEven, findUniqueNum:UniqueNum, findGetType:getTypes,
            DestructureArray:destructureArray,IndexOfOdd:indexOfOdd,
            StringToArray:strToArray,ArrayToString:arrayToString,ConvertObjectToArray:convertObjectToArray,FindOldestPerson:findOldestPerson,
            FindYoungestAge:findYoungestAge,FindYounger:findYounger  }