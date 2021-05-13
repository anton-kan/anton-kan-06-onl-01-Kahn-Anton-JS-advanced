const array = [1, 2, 3, 4, 5];
const methods = [
  { method: array.map, arguments: [(item) => item * 2] },
  { method: array.pop, arguments: [] },
];

methods.forEach(({method, arguments}) => checkMutability(array, method, arguments));

function checkMutability(array, method, arguments) {
  const arrayImage = JSON.stringify(array);
  method.call(array, ...arguments);
  const mutated = JSON.stringify(array) !== arrayImage;
  console.log(`Method ${method.name} is ${mutated ? 'mutating' : 'non-mutating'}`);
}
