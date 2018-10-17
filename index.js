
var longestWord = function(string){
//function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("kindness and godliness"));
var getVowels = function(str){
//function getVowels(str) {
  var vowelsCount = 0;

  //turn the input into a string
  var string = str.toString();

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(getVowels("The english is a language"));

var number = function(numbers){
return 8 + numbers;

}
console.log(number(6));

module.exports = function(){

  longestWord,
  getVowels
}
