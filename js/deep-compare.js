function deepCompare(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  if (typeof obj1 === 'object') {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    return Object.keys(obj1).reduce((acc, value) => acc && deepCompare(obj1[value], obj2[value]), true);
  }
  if (typeof obj1 === 'function') {
    return obj1.toString() === obj2.toString() && obj1.name === obj2.name;
  }
  return false;
}

module.exports = deepCompare;
