function findFake(array, callback) {
  if (!Array.isArray(array)) return undefined;

  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i)) return array[i];
  }
}

console.log(findFake([1, 2, 3, 4, 5], (item, index) => item % 2 === 0));

// Tìm số chia hết cho 2
