function deepCopy(obj) {
  if (typeof obj === 'object') {
    const copy = new Object();
    for (let key of Object.keys(obj)) {
      copy[key] = deepCopy(obj[key]);
    }
    return copy;
  }
  if (typeof obj === 'function') {
    const copy = new Function('return ' + obj.toString())();
    Object.defineProperty(copy, 'name', { value: obj.name });
    return copy;
  }
  return obj;
}

module.exports = deepCopy;
