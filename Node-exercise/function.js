//Numbers divisible by 4
function number(array) {
    var temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 4 === 0) {
            temp.push(array[i]);
        }
    }
    return temp;

}
// let b = [1,2,3,4,5,6,7,8]
// //number(b);
// console.log(number(b))

//Even Numbers
function even(array) {
    let temp = [];

    for (let value of array) {
        if (value % 2 == 0) {
            temp.push(value);
        }
    }
    return temp;

}

// var a = [1,2,3,4,5,6,7,8];
// even(a);
// console.log(even(a));

//Odd Numbers
function odd(array) {

    let temp = [];

    for (let item of array) {
        if (item % 2 != 0) {
            temp.push(item);
        }


    }
    return temp;
}

// odd(a);
// console.log(odd(a))


//Sum of all numbers
function sum(array) {
    var temp = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 4 === 0) {
            sum += array[i];

            //temp.push(array[i]);
        }
    }
    return sum;

}

//    sum(a);
//    console.log(sum(a));

//Sum of Odd
function sumOfOdd(array) {
    let sum = 0;
    for (let odd of array) {
        if (odd % 2 !== 0) {
            sum += odd;
        }
    }
    return sum;
}

//    console.log("sum of odd = " + sumOfOdd(a));


//Sum of Even
function sumOfEven() {

    let sum = 0;
    for (let value of array) {
        if (value % 2 == 0) {
            sum += value;
        }
    }
    return temp;

}

//Find the Unique Number in the Array


function UniqueNum(array) {

    let temp = [];
    let index = 0;

    for (let i = 0; i < array.length - 1; i++) {
        let count = 0;
        for (let j = 0; j < i; j++)
            if (array[i] == array[j]) {
                count = 1;
                break
            }

        if (count == 0) {
            temp.push(array[i])
            index++;
        }

    }
    return temp;
}

let c = [1, 2, 3, 4, 2, 4, 3, 5, 6, 7, 8, 8, 9];
// console.log(UniqueNum(c));


let myArray = [50, "apple", { a: 1 }]
function getType(array) {
    return array.map((x) => typeof x);
}

//    console.log(getType(myArray));


function getTypes(array) {
    let solution = []
    for (let i = 0; i < array.length; i++) {
        solution.push(typeof array[i])
    }
    return solution;
}

//    console.log(getTypes(myArray));

//    function destructureArray(array){

//     let myObj = {};
//     let key = "number0"
//     for(let i = 0; i < array.length; i++){
//     myObj[key]
//        myObj.push(typeof array[i] )
//      }

array = [50,'apple',{a:1}];

let typeArray = [];
for (let i = 0; i < array.length; i++) {
    typeArray.push(typeof array[i])
}

let indexArray = [];
for (let i = 0; i < array.length; i++) {
    indexArray.push(i);
}

let concatArray = [];
for (let i = 0; i < array.length; i++) {
    concatArray.push(typeArray[i]+indexArray[i])
    // = typeArray.concat(indexArray);
}

let finalArray = [];
concatArray.forEach((element, index) => {

  finalArray[element]=array[index];

});

console.log(finalArray);


// }




