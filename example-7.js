function isPalindrome(str) {
  let fowardStr = str.toLowerCase().replace(/[\W_]/g, '');
  let reverseStr = fowardStr.split('').reverse().join('');

  return fowardStr === reverseStr;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('My age is 0, 0 si ega ym'));
console.log(isPalindrome('_codegod'));
console.log(isPalindrome('legendary'));
console.log(isPalindrome('.0_0 (: /- :) 0-0'));
