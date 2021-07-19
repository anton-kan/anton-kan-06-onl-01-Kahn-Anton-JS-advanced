import mutatingMethods from './mutating-methods';
import nonMutatingMethods from './non-mutating-methods';

const checkMethodLists = (methodLists) =>
  compareArrays(methodLists.mutating, mutatingMethods()) &&
  compareArrays(methodLists.nonMutating, nonMutatingMethods());

const compareArrays = (array1, array2) =>
  array1.length === array2.length && array1.every((element) => array2.includes(element));

export default checkMethodLists;
