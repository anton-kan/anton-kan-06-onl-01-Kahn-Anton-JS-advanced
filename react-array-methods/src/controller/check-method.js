import mutatingMethods from './mutating-methods';
import nonMutatingMethods from './non-mutating-methods';

const checkMethod = (methodName, listKey) => {
  switch (listKey) {
    case 'mutating':
      return mutatingMethods().includes(methodName);
    case 'nonMutating':
      return nonMutatingMethods().includes(methodName);
    default:
      return false;
  }
};

export default checkMethod;
