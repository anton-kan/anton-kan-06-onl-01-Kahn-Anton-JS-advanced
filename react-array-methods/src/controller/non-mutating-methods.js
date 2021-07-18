import knownMethods from '../model/known-methods';
import mutatingMethods from './mutating-methods';

const nonMutatingMethods = () => {
  const mutatingMethodsList = mutatingMethods();
  return knownMethods()
    .map((item) => item.method)
    .filter((name) => !mutatingMethodsList.includes(name));
};

export default nonMutatingMethods;
