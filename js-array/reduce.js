console.log(
  [1, 2, 3, 4, 5, 6, 7, 123, 5, 23].reduce((max, number) => {
    console.log(number, max);
    return number > max ? number : max;
  })
);
