const deepCompare = require('../deep-compare');

test('equal objects with 1 level and no methods', () => {
  const obj1 = {
    s: 'string',
    n: 12345,
    b: true,
  };
  const obj2 = {
    s: 'string',
    n: 12345,
    b: true,
  };

  expect(deepCompare(obj1, obj2)).toBe(true);
});

test('not equal objects with 1 level and no methods', () => {
  const obj1 = {
    s: 'string',
    n: 12345,
    b: true,
  };
  const obj2 = {
    s: 'string',
    n: '12345',
    b: true,
  };

  expect(deepCompare(obj1, obj2)).toBe(false);
});

test('equal objects with 2 levels and no methods', () => {
  const obj1 = {
    s: 'string',
    n: 12345,
    b: true,
    subObject: {
      name: 'Vasya',
      age: 49,
    },
  };
  const obj2 = {
    s: 'string',
    n: 12345,
    b: true,
    subObject: {
      name: 'Vasya',
      age: 49,
    },
  };

  expect(deepCompare(obj1, obj2)).toBe(true);
});

test('not equal objects with 2 levels and no methods', () => {
  const obj1 = {
    s: 'string',
    n: 12345,
    b: true,
    subObject: {
      name: 'Vasya',
      age: 49,
    },
  };
  const obj2 = {
    s: 'string',
    n: 12345,
    b: true,
    subObject: {
      name: 'Vasya',
      age: 49,
      anotherProperty: 'anotherValue',
    },
  };

  expect(deepCompare(obj1, obj2)).toBe(false);
});

test('equal objects with 1 level and a method', () => {
  const obj1 = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi: function () {
      console.log('Hello world!');
    },
  };
  const obj2 = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi: function () {
      console.log('Hello world!');
    },
  };

  expect(deepCompare(obj1, obj2)).toBe(true);
});

test('not equal objects with 1 level and a method', () => {
  const obj1 = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi: function () {
      console.log('Hello world!');
    },
  };
  const obj2 = {
    s: 'string',
    n: 12345,
    b: true,
    sayHello: function () {
      console.log('Hello world!');
    },
  };

  expect(deepCompare(obj1, obj2)).toBe(false);
});

test('equal objects with 2 levels and 2 methods', () => {
  const obj1 = {
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
  const obj2 = {
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

  expect(deepCompare(obj1, obj2)).toBe(true);
});

test('not equal objects with 2 levels and 2 methods', () => {
  const obj1 = {
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
  const obj2 = {
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
        // Some extra comment
        console.log(`Hi ${userName}! My name is ${this.name} and I'm ${this.age} years old`);
      },
    },
  };

  expect(deepCompare(obj1, obj2)).toBe(false);
});
