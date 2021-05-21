const deepCopy = (obj) => {
  if (typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, value) => {
      acc[value] = deepCopy(obj[value]);
      return acc;
    }, {});
  }
  if (typeof obj === 'function') {
    // eslint-disable-next-line no-new-func
    const copy = new Function(`return ${obj.toString()}`)();
    Object.defineProperty(copy, 'name', { value: obj.name });
    return copy;
  }
  return obj;
};

module.exports = deepCopy;
