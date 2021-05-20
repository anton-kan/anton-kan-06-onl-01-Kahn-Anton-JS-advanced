(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const toggleTooltip = require('../tooltip/tooltip');

document.addEventListener('mousemove', toggleTooltip);

const sampleArray = [1, 2, 3, 4, 5, [6, 7], 3, new Date(), 8, 9, 10];
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
  { method: Array.prototype.forEach, args: [(item) => item * 2] },
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

const renderList = (array, tooltip) => array.map((item) => `<li data-tooltip="${item} is a ${tooltip} method">${item}</li>`).join('');

const allMethodNames = Object.getOwnPropertyNames(Array.prototype).filter(
  (property) => typeof Array.prototype[property] === 'function',
);
const knownMethodNames = knownMethodsWithArgs.map((item) => item.method.name);
const unknownMethodNames = allMethodNames.filter((name) => !knownMethodNames.includes(name));
const mutatingMethodNames = knownMethodsWithArgs
  .filter(({ method, args }) => isMutating(sampleArray, method, args))
  .map((item) => item.method.name);
const nonMutatingMethodNames = knownMethodNames.filter(
  (name) => !mutatingMethodNames.includes(name),
);

const fillTable = () => {
  const mutatingListElement = document.querySelector('.mutating-list');
  const nonMutatingListElement = document.querySelector('.non-mutating-list');
  const unknownListElement = document.querySelector('.unknown-list');

  mutatingListElement.innerHTML = renderList(mutatingMethodNames, 'mutating');
  nonMutatingListElement.innerHTML = renderList(nonMutatingMethodNames, 'non-mutating');
  unknownListElement.innerHTML = renderList(unknownMethodNames, 'unknown');
};

fillTable();

},{"../tooltip/tooltip":2}],2:[function(require,module,exports){
const tooltipElement = document.querySelector('.tooltip');

const toggleTooltip = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const targetElement = document.elementFromPoint(x, y);
  if (targetElement.tagName.toUpperCase() === 'LI') {
    tooltipElement.style.left = `${targetElement.getBoundingClientRect().left}px`;
    tooltipElement.style.top = `${targetElement.getBoundingClientRect().bottom}px`;
    tooltipElement.innerText = targetElement.dataset.tooltip;
    tooltipElement.classList.remove('hidden');
  } else {
    tooltipElement.classList.add('hidden');
  }
};

module.exports = toggleTooltip;

},{}]},{},[1]);
