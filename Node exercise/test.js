function destructureArray(array){

    let obj = {};
    let objVal = ""
    for(let i = 0; i < array.length; i++){
 
     objVal = typeof array[i] + i;

    }

 return objVal;
 }


  function destructureArray(array){

       let obj = {};
       let objVal = ""
       for(let i = 0; i < array.length; i++){
    
        objVal = typeof array[i] + i;

       }

       return objVal;

    }
   let array = [50,"apple",{a:1}]

   console.log(destructureArray(array));