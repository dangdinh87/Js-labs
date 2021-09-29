//?  input
//* const cars = [
//*     {name: 'Civic', price: 25000 . brand : "Honda"}
//*     {name: 'Meta', price: 35000 . brand : "Honda"},
//*     {name: 'City', price: 45000 . brand : "Suzuki"}];
//?  output
//* [
//*     {brand : "Honda"}, cars : [ {name: 'Civic', price: 25000 . brand : "Honda"} ,{name: 'Meta', price: 35000 . brand : "Honda"}],
//*     {brand : "Suzuki"}, cars : [ {name: 'City', price: 45000 . brand : "Suzuki"} ]
//* ]

const cars = [
  { name: 'Civic', price: 25000, brand: 'Honda' },
  { name: 'Meta', price: 35000, brand: 'Honda' },
  { name: 'City', price: 45000, brand: 'Suzuki' },
];

function GroupCarByType(array) {
  if (!Array.isArray(array) || array.length === 0) return [];

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const car = array[i];
    const { brand } = car;
    let index = result.findIndex((item) => item.brand === brand);
    if (index === -1) {
      result.push({ brand, cars: [car] });
    } else {
      result[index].cars.push(car);
    }
  }

  return result;
}
console.log(GroupCarByType(cars));

function GroupCarByType2(array) {
  if (!Array.isArray(array) || array.length === 0) return [];

  const result = [];
  const map = {};

  for (let i = 0; i < array.length; i++) {
    const car = array[i];
    if (!map[car.brand]) {
      map[car.brand] = { brand: car.brand, cars: [] };
      result.push(map[car.brand]);
    }
    map[car.brand].cars.push(car);
  }

  return map;
}
console.log(GroupCarByType2(cars));

//* Biến đổi mảng phần tử mảng thành phần tử trước + phần tử sau,nếu không có thì công cho 0
