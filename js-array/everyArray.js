function everyFake(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) return true;
  }

  return false;
}

console.log(everyFake([1, 2, 3, 4, 5]));
