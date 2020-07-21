function longestWordLength(str) {
  let longestLength = 0;
  let strArr = str.split(' ');

  // for (let i = 0; i < strArr.length; i++) {
  // if (longestLength < strArr[i].length) {
  //   longestLength = strArr[i].length;
  // }
  strArr.forEach((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  // longestLength =
  //   longestLength < strArr[i].length ? strArr[i].length : longestLength;
  // }

  return longestLength;
}

function longestWordLength2(str) {
  let longestLength = str.split(' ').sort((word1, word2) => {
    return word2.length - word1.length;
  })[0].length;

  return longestLength;
}

console.log(longestWordLength2('I am a coding god'));
console.log(longestWordLength2('I would like to work for google'));
console.log(longestWordLength2("Ain't not fun if the homie don't code none"));
