const isMutating = (array, method, args) => {
  const arrayImage = JSON.stringify(array);
  array[method](...args);
  return JSON.stringify(array) !== arrayImage;
};

export default isMutating;
