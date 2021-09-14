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

//129 true1
console.log(inCrease(23456));
