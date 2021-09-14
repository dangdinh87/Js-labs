'use strict';

const dinh = {
  name: 'Dinh',
  age: 18,
  writable: '',
};

const atr = Object.getOwnPropertyDescriptor(dinh, 'name');

console.log(atr);

const atr1 = Object.defineProperty(dinh, 'name', {
  writable: false,
});

console.dir(Object.getOwnPropertyDescriptor(dinh, 'name'));
