//* Kiem tra co ton tai phan tu trong mang hay khong ?

const listElement = [
  { id: 1, name: 'Dinh', age: 20 },
  { id: 2, name: 'Anh', age: 30 },
  { id: 3, name: 'Chuot', age: 40 },
];

function checkElementArray(array, check) {
  if (!Array.isArray(array) || array.length === 0 || check === undefined) return false;

  let isFind = false;

  array.filter((element) => {
    return element.age === check;
  }).length > 0
    ? (isFind = true)
    : (isFind = false);

  return isFind;
}

console.log(checkElementArray(listElement, 20));

//* Tim kiem phan tu bang ID trong mang

function findElementById(elementList, id) {
  if (!Array.isArray(elementList) || elementList.length === 0 || id === undefined) return -1;

  return elementList.findIndex((element) => element.id === id);
}

console.log(findElementById(listElement, 2));

//* Liệt kê tất cả các số mà có chữ số đầu tiên là số lẻ

function findNumber(elementList) {
  if (!Array.isArray(elementList) || elementList.length === 0) return;

  const arrayResult = [];
  elementList.forEach((element) => {
    if (Number.parseInt(element.toString().charAt(0)) % 2 === 1) arrayResult.push(element);
  });

  return arrayResult;
}

function findNumber2(elementList) {
  if (!Array.isArray(elementList) || elementList.length === 0) return;

  return elementList.filter((element) => {
    return Number.parseInt(element.toString().charAt(0)) % 2 === 1;
  });
}
arrayNumber = [123, 22, 31, 4, 55, 96, 71, 82, 539, 110];

console.log(findNumber(arrayNumber));
console.log(findNumber2(arrayNumber));

//* Tìm ra số suốt hiện trong mảng nhiều nhất

function findMostFrequentNumber(elementList) {
  if (!Array.isArray(elementList) || elementList.length === 0) return;

  const objTemp = {};

  elementList.forEach((element) => {
    if (objTemp[element] === undefined) objTemp[element] = 1;
    else objTemp[element] += 1;
  });

  const maxKey = undefined;

  for (let key in objTemp) {
    if (maxKey === undefined) maxKey = key;
    else if (objTemp[key] > objTemp[maxKey]) maxKey = key;
  }

  return maxKey;
}

console.log(findMostFrequentNumber([1, 2, 3, 4, 5, 5, 6, 6, 1, 2, 3, 3, 44, 1, 2]));
