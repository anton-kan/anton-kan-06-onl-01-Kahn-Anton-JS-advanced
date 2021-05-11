function deepCopy(obj) {
  if (typeof obj === 'object') {
    const copy = new Object();
    for (let key of Object.keys(obj)) {
      copy[key] = deepCopy(obj[key]);
    }
    return copy;
  }
  return obj;
}

module.exports = deepCopy;
