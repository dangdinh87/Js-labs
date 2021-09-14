// //*  'nguyen dang dinh'  => {'n':4, 'g':2,...}

function statisticsCharacters(str) {
  if (str.length === 0) return {};

  const result = {};
  str
    .trim()
    .split('')
    .map((char) => {
      if (char === ' ') char = 'space';
      return char;
    })
    .forEach((char) => {
      char in result ? result[char]++ : (result[char] = 1);
    });

  // result.space = result[' '];
  // delete result[' '];

  return result;
}

console.log(statisticsCharacters('dang dinh'));
