function repeatString(str, num) {
  // return str.repeat(num);
  let repeatedString = '';

  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
}

console.log(repeatString('I am a coding god', 2));
console.log(repeatString('I would like to work for Google', 3));
