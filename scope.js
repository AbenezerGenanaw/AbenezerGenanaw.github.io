//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned, 
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40, 
// }
//  main();
//console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.



// 1. Since there isn't any function declaration inside the function it will give priority to the outside global function
// let grapes = "green"; 

// function fruits(){ 

//     return function(message){ 

//         return grapes; 

//     } 

// } 

// console.log(fruits()()); //


2. // Read value from the global scope and reasigning it in the global scope will change the global variable and we don't have 
//a variable declared inside the function

//let x = 10; 

// function globalVar(){ 

//     return function(){ 

//        return x; 

//     } 

// } 

// x = 20; 

// let fn = globalVar(); 

// console.log(fn ()); //20



 
//3 There is a parmeter inside the inner function but noting is declared inside it. The inner function's scope is only in it's block
//unless we re assigned it will  be the same and undefined

// function sport(message){ 

//      message = "Hi"; 

//     return function(message){ 
        
       
//         return message;     

//     } 
    
// } 

// let sportFn = sport("Hello"); 

// console.log(sportFn ()); //undefined



 

// 4. function scope always give priority to the global variable if noting is declare inside the function

// function test(x) { 

//     x = 10; 

//     x++; 

//     return function(){ 

//         return x++; 

//     } 

// } 

// console.log(test(2)()) 
 
 

// // 5. let is block scope it can only be valid inside a block the color white and brown has a block scope. since we don't have
//havve parametrized function if we pass parameter it's not going to be changed
// function car(){ 

//     let color = "white"; 

//     function seat(){ 

//         let color = "brown"; 
//         console.log(color)//____brown_______

//     } 

//     console.log(color)//_____white_____

   
// } 

// car("black") 



// 6. language is declaered inside the inner function which only have have a block scop 
// function department(){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments);//5
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language)//java script

//     } 

//     console.log(language) //undeindefined

// } 


// department() 

 

// 7.  since we the outer function can take parameter and we pass parameter and that parameter can be has functional scope and the output
// wiil be java and 5
function department(language){ 

    let numberOfDepartments = 5; 
    console.log(numberOfDepartments)//5
    function software(){ 

        let language = "javascript"; 
        console.log(language);//javascript

    } 

    console.log(language) //java

} 

department("java"); 



 