const array = [1, 2, 3, 4, 5];
const methods = [
  { method: array.map, arguments: [(item) => item * 2] },
  { method: array.pop, arguments: [] },
];
const mutatingMethods = [];
const nonMutatingMethods = [];

function isMutating(array, method, arguments) {
  const arrayImage = JSON.stringify(array);
  method.call(array, ...arguments);
  return JSON.stringify(array) !== arrayImage;
}

function fillTable() {
  const tableElement = document.querySelector('.methods-table');
  const length = Math.max(mutatingMethods.length, nonMutatingMethods.length);
  for (let i = 0; i < length; i++) {
    const rowElement = document.createElement('tr');
    const mutatingCellElement = document.createElement('td');
    mutatingCellElement.innerText = mutatingMethods[i] || '';
    const nonMutatingCellElement = document.createElement('td');
    nonMutatingCellElement.innerText = nonMutatingMethods[i] || '';
    rowElement.append(mutatingCellElement);
    rowElement.append(nonMutatingCellElement);
    tableElement.append(rowElement);
  }
}

methods.forEach(({method, arguments}) => isMutating(array, method, arguments) ? mutatingMethods.push(method.name) : nonMutatingMethods.push(method.name));

fillTable();