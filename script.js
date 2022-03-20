//created a function to add to a button
function removesVowel() {
  //call the prompt 
let word = prompt ("Gimmie a word please");
  
//log the result to the console 
console.log(word.replace(/[aeiou]/gi, ''));
}
//The gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string.




//add the function to the button 
document.getElementById("myBtn").onclick = removesVowel;

//code to take log answers to html 
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
      logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();








  

  
  



