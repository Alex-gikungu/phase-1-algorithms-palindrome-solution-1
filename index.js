function reverse(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const reversedArray = wordArray.reverse("");
  const reverseWord = reversedArray.join("");
  return reverseWord;
}


function isPalindrome(word){
  const reverseWord = reverse(word);

  return word === reverseWord;
}
/* 
  Add your pseudocode here
array word 
reverse array 
joining the reverse word 
return the reverse word 

word returned should be equall to its reverse 


*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
