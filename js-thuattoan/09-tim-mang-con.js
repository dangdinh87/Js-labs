//* Tìm mảng con trả về các số dương lẻ liên tiếp
//* [1,3,4,6,3,7,8,9,7,1,2,3] => [[1,3],[3,7],[9,7],[1,2,3]]
//* phần tử cuối hợp lệ cũng là 1 mảng con riêng.

function findOddSubarray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const resultList = [];
  let subList = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number > 0 && number % 2 === 1) {
      subList.push(number);
    }

    //check to reset sub array
    if (subList.length > 0 && (number % 2 === 0 || i === arr.length - 1)) {
      resultList.push(subList);
      subList = [];
    }
  }

  return resultList;
}

console.log(findOddSubarray([1, 3, 4, 6, 3, 7, 8, 9, 7, 1, 2, 3]));

//* Tìm  mảng con trả về các tổng số dương lẻ liên tiếp
//* [1,3,4,6,3,7,8,9,7,1,2,3] => [[4],[10],[16],[6]]
//* phần tử cuối hợp lệ cũng là 1 mảng con riêng.
