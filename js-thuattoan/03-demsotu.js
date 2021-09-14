// //*  'nguyen dang nguyen dinh'  => {'nguyen':2, 'dang':1, 'dinh':1}
function statisticsWords(str) {
  if (str.length === '') return {};

  let result = {};
  str
    .trim()
    .split(' ')
    .filter((x) => x !== '')
    .forEach((element) => {
      element in result ? result[element]++ : (result[element] = 1);
    });
  return result;
}
console.log(statisticsWords('nguyen   dang din va nguyen    dinh'));

// //* reduce
function statisticsWords2(str) {
  if (str.length === '') return {};

  return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistics, element) => {
      statistics[element] = element in statistics ? statistics[element] + 1 : 1;
      return statistics;
    }, {});
}
console.log(statisticsWords2('le thi tram anh'));
