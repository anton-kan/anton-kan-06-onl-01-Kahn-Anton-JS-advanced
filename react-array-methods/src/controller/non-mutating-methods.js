import knownMethods from '../model/known-methods';
import mutatingMethods from './mutating-methods';

const nonMutatingMethods = () => {
  const mutatingMethodsList = mutatingMethods();
  return knownMethods()
    .filter((name) => !mutatingMethodsList.includes(name))
    .map((item) => item.method);
};

export default nonMutatingMethods;
