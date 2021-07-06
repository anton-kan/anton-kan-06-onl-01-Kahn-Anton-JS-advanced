const allMethods = (): string[] =>
  Object.getOwnPropertyNames(Array.prototype).filter(
    (property) => typeof (Array as { [key: string]: any }).prototype[property] === 'function'
  );

export default allMethods;
