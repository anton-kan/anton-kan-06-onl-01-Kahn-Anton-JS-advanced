import allMethods from '../model/all-methods';
import knownMethods from '../model/known-methods';

const unknownMethods = () => {
  const knownMethodsNames = knownMethods().map((item) => item.method);
  return allMethods().filter((name) => !knownMethodsNames.includes(name));
};

export default unknownMethods;
