const array = [1, 2, 3, 4, 5, [6, 7], 3, new Date(), 8, 9, 10];
const knownMethodsWithArgs = [
  { method: Array.prototype.concat, args: [['a', 'b', 'c']] },
  { method: Array.prototype.copyWithin, args: [0, 3, 4] },
  { method: Array.prototype.entries, args: [] },
  { method: Array.prototype.every, args: [(item) => item < 4] },
  { method: Array.prototype.fill, args: [0, 3, 4] },
  { method: Array.prototype.filter, args: [(item) => item < 4] },
  { method: Array.prototype.find, args: [(item) => item > 3] },
  { method: Array.prototype.findIndex, args: [(item) => item > 3] },
  { method: Array.prototype.flat, args: [] },
  { method: Array.prototype.flatMap, args: [(item) => [item, item * 2]] },
  { method: Array.prototype.forEach, args: [(item) => console.log(item)] },
  { method: Array.prototype.includes, args: [3] },
  { method: Array.prototype.indexOf, args: [3] },
  { method: Array.prototype.join, args: [] },
  { method: Array.prototype.keys, args: [] },
  { method: Array.prototype.lastIndexOf, args: [3] },
  { method: Array.prototype.map, args: [(item) => item * 2] },
  { method: Array.prototype.pop, args: [] },
  { method: Array.prototype.push, args: [15] },
  { method: Array.prototype.reduce, args: [(acc, value) => acc + value] },
  { method: Array.prototype.reduceRight, args: [(acc, value) => acc + value] },
  { method: Array.prototype.reverse, args: [] },
  { method: Array.prototype.shift, args: [] },
  { method: Array.prototype.slice, args: [2, 4] },
  { method: Array.prototype.some, args: [(item) => item < 4] },
  { method: Array.prototype.sort, args: [] },
  { method: Array.prototype.splice, args: [2, 3, 20] },
  { method: Array.prototype.toLocaleString, args: ['ru'] },
  { method: Array.prototype.toString, args: [] },
  { method: Array.prototype.unshift, args: [10] },
  { method: Array.prototype.values, args: [] },
];

const isMutating = (array, method, args) => {
  const arrayImage = JSON.stringify(array);
  method.call(array, ...args);
  return JSON.stringify(array) !== arrayImage;
};

const renderList = (element, array) => {
  element.innerHTML = array.map((item) => `<li>${item}</li>`).join('');
};

const fillTable = () => {
  const mutatingListElement = document.querySelector('.mutating-list');
  const nonMutatingListElement = document.querySelector('.non-mutating-list');
  const unknownListElement = document.querySelector('.unknown-list');

  renderList(mutatingListElement, mutatingMethodNames);
  renderList(nonMutatingListElement, nonMutatingMethodNames);
  renderList(unknownListElement, unknownMethodNames);
};

const allMethodNames = Object.getOwnPropertyNames(Array.prototype).filter(
  (property) => typeof Array.prototype[property] === 'function'
);
const knownMethodNames = knownMethodsWithArgs.map((item) => item.method.name);
const unknownMethodNames = allMethodNames.filter((name) => !knownMethodNames.includes(name));
const mutatingMethodNames = knownMethodsWithArgs
  .filter(({ method, args }) => isMutating(array, method, args))
  .map((item) => item.method.name);
const nonMutatingMethodNames = knownMethodNames.filter((name) => !mutatingMethodNames.includes(name));

fillTable();
