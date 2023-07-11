//function isPalindrome(word) {
  // Write your algorithm here
  //return word === word.split("").reverse().join("");
//}
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
    return word === reversedWord
  }


/* This is a pseudocode 
if the reversed string === input //true
if the reversed string !=== input //false
*/

/*
  Add written explanation of your solution here
  when a word is equal to itself when reversed it should show a boolean true 
  example: racecar => racecar it gives an output of true
  when a word is not equal to itself when reversed it should show a boolean false
  example: robot => tobor it gives an output of false
*/
if (require.main === module) {
  // custom tests case are here 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


module.exports = isPalindrome;
