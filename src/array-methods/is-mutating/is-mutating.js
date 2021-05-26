const isMutating = (array, method, args) => {
  const arrayImage = JSON.stringify(array);
  method.call(array, ...args);
  return JSON.stringify(array) !== arrayImage;
};

export default isMutating;
