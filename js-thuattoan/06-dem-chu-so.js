//* Hãy đếm số lượng chữ số của số nguyên dương n

function countIntegerDigits(n) {
  if (n <= 0) return 0;
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(countIntegerDigits(1001111111));

//* Hãy tính tổng các chữ số chẵn của số nguyên dương n

function sumOddNumber(n) {
  if (n <= 0) return 0;
  let sum = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      sum += n % 10;
    }
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumOddNumber(123456789));

//
