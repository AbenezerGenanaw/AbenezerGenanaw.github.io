
          function max(a, b) {
            if (a > b) {
              return a;
            } else {
              return b;
            };
          }
                   
         
          function maxOfThree(a, b, c) {
            return max(max(a, b), c);
          
          }
  

          function checkVowel(str) {
            return (str.toUpperCase() === "A" || str.toUpperCase() === "E" || str.toUpperCase() === "I" || str.toUpperCase() === "O" || str.toUpperCase() === "U");
          }
  
          function sum(arr) {
            let result = 0; 
           return arr.reduce((result, num) => result+num);
          }
  
          function multiply(arr) {
            let total = 1;
           return arr.reduce((total,num)=> total*num);
  
          }
            function strReverse(str) {
            return str.split('').reverse().join('');
          }
            function findLongestWord(words) {
            let maxLength = 0
             for(i in words) {
             maxLength =  max(maxLength, words[i].length);
             }
             return maxLength;
          }
          function filterLongWords(words , i) {
              return words.filter(word => word.length > i);
          }