obj = {a:1, b : "String", c :{a:1, c:"String"}, d : [1,2,3]}


    for(let key in obj){

      
        if(typeof key == "object"){

         
              console.log(obj[key]);
          
        }
  
       console.log("Key "+key +":"+ obj[key])

    }


