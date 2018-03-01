//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

//Factorialize a Number
function factorialize(num) {
  var num2 = 1;
  for(var i = 1; i <= num; i++)
    num2 *= i;
  return num2;
}

factorialize(5);

//Check for Palindromes
function palindrome(str) {
  // Good luck!
  var str2 = str.replace(/\W|_/g, '');
  str2 = str2.toLowerCase();
  for(var i = 0; i < str2.length/2; ++i)
    if(str2[i] != str2[str2.length-1-i])
      return false;
  return true;
}

palindrome("_eye");

//Find the Longest Word in a String
function findLongestWord(str) {
  var arr = str.split(' ');
  var max_len = 0;
  for(var i = 0; i < arr.length; i++){
    if(max_len < arr[i].length)
      max_len = arr[i].length;
  }
  return max_len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Title Case a Sentence
function titleCase(str) {
  var arr = str.split(' ');
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
  }
  str = arr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  arr2 = [];
  for(var i = 0; i < arr.length; i++)
    arr2.push(Math.max(...arr[i]));

  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the Ending
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");

//Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  str2 = "";
  for(var i = 0; i < num; i++)
    str2 += str;
  return str2;
}

repeatStringNumTimes("abc", 3);

//Truncate a string
function truncateString(str, num) {
  if(str.length > num){
    var str2;
    if(num <= 3)
      str2 = str.slice(0, num);
    else
      str2 = str.slice(0, num-3);
    str2 += "...";
    return str2;
  }else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  var i = 0;
  while(i < arr.length){
    arr2.push(arr.slice(i, i+size));
    i+=size;
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Slasher Flick
function slasher(arr, howMany) {
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);

//Mutations
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++){
    if(arr[0].indexOf(arr[1][i]) == -1)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);

//Falsy Bouncer
function bouncer(arr) {
  return arr.filter(x => Boolean(x) !== false);
}

bouncer([7, "ate", "", false, 9]);

//Seek and Destroy
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(x => !args.includes(x));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Where do I belong
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b;});
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

//Caesars Cipher
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, x => String.fromCharCode(((x.charCodeAt(0)-65 +13) %26) + 65));
}

rot13("SERR PBQR PNZC");
