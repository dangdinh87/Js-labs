//*Liet ke cac uoc so cua 1 so nguyen duong

function timCacUoc(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(timCacUoc(12));

//*Tìm tổng các ước của số nguyên
function timTongUoc(n) {
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(timTongUoc(12));

//*Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
function timUocLeLonNhat(n) {
  let max = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0 && max < i) {
      max = i;
    }
  }
  return max;
}

console.log(timUocLeLonNhat(100));

//*Kiem tra so nguyen to, so hoan thien, so chinh phuong
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
