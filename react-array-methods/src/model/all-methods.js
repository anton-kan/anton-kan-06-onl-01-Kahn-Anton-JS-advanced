const allMethods = () =>
  Object.getOwnPropertyNames(Array.prototype).filter((property) => typeof Array.prototype[property] === 'function');

export default allMethods;
