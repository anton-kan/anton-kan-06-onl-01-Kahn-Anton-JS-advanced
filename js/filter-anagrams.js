function filterAnagrams(arr) {
  const map = new Map();
  arr.forEach((item) => map.set(item.split('').sort().join(''), item));
  return Array.from(map.values());
}

module.exports = filterAnagrams;
