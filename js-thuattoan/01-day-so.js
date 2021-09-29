//*Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

function calculateSum1(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//*de quy
function calculateSum1a(n) {
  if (n <= 0) return 0;
  return n + calculateSum1a(n - 1);
}

console.log(calculateSum1a(5));

//*Bài 2: Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1
function calculateSum2(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i / (i + 1);
  }
  return sum;
}

function calculateSum2a(n) {
  if (n <= 0) return 0;
  console.log(n);
  return n / (n + 1) + calculateSum2a(n - 1);
}

console.log(calculateSum2a(2));

//*Bai3 : Tính T(n) = 1 x 2 x 3…x N
function multiplication(n) {
  if (n <= 0) return 0;
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

function multi3(n) {
  if (n <= 0) return 0;
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

function multi3a(n) {
  if (n <= 0) return 1;
  return n * multi3a(n - 1);
}

console.log(multi3a(10));

//*Bai4: Tính T(x, n) = x^n
function exponential(x, n) {
  if (n <= 0) return 0;
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= x;
  }
  return sum;
}

function exponential1(x, n) {
  if (n === 0) return 1;
  console.log(x, n);
  return x * exponential1(x, n - 1);
}

console.log(exponential1(2, 4));

//*Bài 5: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
function Bai5(n) {
  if (n <= 0) return 0;
  let sum = 0;
  let p = 1;
  for (let i = 1; i <= n; i++) {
    p *= i;
    sum += 1 * p;
  }
  return sum;
}
function Bai5DeQuy(n) {
  if (n <= 0) return 1;
  return factorial(n) + Bai5DeQuy(n - 1);
}

function factorial(n) {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

console.log(Bai5DeQuy(3));
console.log(Bai5(3));

//*Bài 6: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1
function Bai6(x, n) {
  if ((n, x <= 0)) return 0;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += Math.pow(x, 2 * i + 1);
  }
  return sum;
}

function Bai6DeQuy(x, n) {
  if ((x, n <= 0)) return x;
  return Math.pow(x, 2 * n + 1) + Bai6DeQuy(x, n - 1);
}

// console.log(Bai6(2, 2));
console.log(Bai6DeQuy(2, 2));

//*Bài 7: Tìm tổng Dãy fibonacci

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 0 || n === 1) return n;
  let temp1 = 0;
  let temp2 = 1;
  let sum = 1;
  for (let i = 2; i < n; i++) {
    temp1 = temp2;
    temp2 = sum;
    sum = temp1 + temp2;

    // sum += i - 2 + (i - 1);
  }
  return sum;
}

console.log(fibonacci(5));

//* Đệ quy
function fibonacci1(n) {
  console.log(n);
  if (n <= 0) return 0;
  if (n === 0 || n === 1) return n;

  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.log(fibonacci1(6));
