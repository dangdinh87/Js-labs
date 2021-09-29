//* Bai1 : Kiem tra so nguyen to,
function kiemTraSoNguyenTo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(kiemTraSoNguyenTo(7));
console.log(kiemTraSoNguyenTo(8));

//* Bài 2 : Kiểm tra so hoan thien
function kiemTraSoHoanHao(n) {
  if (n < 1) return false;

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n ? true : false;
}

console.log(kiemTraSoHoanHao(28));

//* Bài 3: Kiểm tra số tăng dần
function inCrease(num) {
  if (num < 10) return false;

  let remaining = Math.trunc(num / 10);
  let prevDigit = num % 10;

  while (remaining > 0) {
    const lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;
    prevDigit = lastDigit;
    remaining = Math.trunc(remaining / 10);
    console.log(lastDigit, prevDigit);
  }
  return true;
}

console.log(inCrease(23456));
//=========================================================
//* Bài 4: Kiểm tra số dối xứng
//* Số đối xứng là số đảo ngược lại bằng số ban đầu.

function isSymmetryNumber(n) {
  if (typeof n !== 'number' || n <= 0) return false;
  let reverse = 0;
  let temp = n;
  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.trunc(temp / 10);
    console.log(reverse, temp);
  }
  return n === reverse;
}

console.log(isSymmetryNumber(321));
