function everyFake(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) return false;
  }

  return true;
}
console.log(someFake([1, 2, 3, 4, 5]));

function someFake(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) return true;
  }

  return false;
}

console.log(someFake([1, 2, 3, 4, 5]));
