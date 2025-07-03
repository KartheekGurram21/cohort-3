/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(letter) {
  return 'aeiouAEIOU'.includes(letter);
}
function countVowels(str) {
    // Your code here
    let cnt = 0;
    for(const letter of str) {
      if(isVowel(letter)) {
        cnt++;
      }
    }
    return cnt;
}

module.exports = countVowels;