function averagePair(arr, number) {
  if (arr.length === 0) {
    return false;
  } else {
    let sum = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      sum += arr[j];
    }
    console.log(sum);
    let a = sum / arr.length;
    if (Math.round(a) === Math.round(number)) {
      return true;
    } else {
      return false;
    }
  }
}
averagePair([1, 2, 3], 2.5);
console.log(averagePair([1, 2, 3], 2.5));
