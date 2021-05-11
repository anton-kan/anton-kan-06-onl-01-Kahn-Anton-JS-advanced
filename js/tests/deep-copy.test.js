const deepCopy = require('../deep-copy');

test('object with 1 level and no methods', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
  };
  expect(deepCopy(obj)).toStrictEqual(obj);
});

test('make sure it is a copy and not the same object', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
  };
  expect(deepCopy(obj)).not.toBe(obj);
});

test('object with 2 levels and no methods', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
    subObject: {
      name: 'Vasya',
      age: 49,
    },
  };
  expect(deepCopy(obj)).toStrictEqual(obj);
});

test('object with 1 level and a method', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi: function () {
      console.log('Hello world!');
    },
  };
  expect(deepCopy(obj)).toStrictEqual(obj);
});

test('object with 2 levels and 2 methods', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi: function () {
      console.log('Hello world!');
    },
    subObject: {
      name: 'Vasya',
      age: 49,
      introduceSelf: function (userName) {
        console.log(`Hi ${userName}! My name is ${this.name} and I'm ${this.age} years old`);
      },
    },
  };
  expect(deepCopy(obj)).toStrictEqual(obj);
});
