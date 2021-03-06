import deepCopy from './deep-copy';
import deepCompare from '../deep-compare/deep-compare';

test('object with 1 level and no methods', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
  };
  const copy = deepCopy(obj);
  expect(copy).toEqual(obj);
  expect(copy).not.toBe(obj);
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
  const copy = deepCopy(obj);
  expect(copy).toEqual(obj);
  expect(copy).not.toBe(obj);
  expect(copy.subObject).not.toBe(obj.subObject);
});

test('object with 1 level and a method', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi() {
      // eslint-disable-next-line no-console
      console.log('Hello world!');
    },
  };
  const copy = deepCopy(obj);
  expect(deepCompare(obj, copy)).toBe(true);
  expect(copy).not.toBe(obj);
  expect(copy.sayHi).not.toBe(obj.sayHi);
});

test('object with 2 levels and 2 methods', () => {
  const obj = {
    s: 'string',
    n: 12345,
    b: true,
    sayHi() {
      // eslint-disable-next-line no-console
      console.log('Hello world!');
    },
    subObject: {
      name: 'Vasya',
      age: 49,
      introduceSelf(userName) {
        // eslint-disable-next-line no-console
        console.log(`Hi ${userName}! My name is ${this.name} and I'm ${this.age} years old`);
      },
    },
  };
  const copy = deepCopy(obj);
  expect(deepCompare(obj, copy)).toBe(true);
  expect(copy).not.toBe(obj);
  expect(copy.subObject).not.toBe(obj.subObject);
  expect(copy.sayHi).not.toBe(obj.sayHi);
  expect(copy.subObject.introduceSelf).not.toBe(obj.subObject.introduceSelf);
});
