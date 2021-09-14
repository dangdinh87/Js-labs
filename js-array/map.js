function mapFake(array, callback) {
  if (!Array.isArray(array)) return undefined;

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    let item = callback(array[i]);
    newArray.push(item);
  }

  return newArray;
}

console.log(mapFake([1, 2, 3, 4, 5], (item, index) => `${item * 2} hello `));

// Tìm số chia hết cho 2
