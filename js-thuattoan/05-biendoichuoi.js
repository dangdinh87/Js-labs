//* Bai 1 : aaabbbccd => a3b3c2d1

function Bai1(str) {
  if (str.length === 0) return '';

  let result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    result += str[i] + count;
  }
  return result;
}
console.log(Bai1('aabcc'));

//* Bai2 : aaabbbccaadddd => a5b3c2d4
function Bai2(str) {
  if (str.length === 0) return '';

  let objCount = {};
  let result = '';
  str.split('').forEach((char) => {
    objCount[char] ? (objCount[char] += 1) : (objCount[char] = 1);
  });

  for (let key in objCount) {
    result += key + objCount[key];
  }

  return result;
}
console.log(Bai2('aaabbbccaadddd'));
