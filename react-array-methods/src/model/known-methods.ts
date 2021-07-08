const ARRAY_ARGS = [0, 3, 4];
const FUNCTION_ARGS = [(item: number) => item < 4];
const NUMBER_ARGS = [3];
const EMPTY_ARGS: number[] = [];

interface IMethodWithArgs {
  method: string;
  args: number[] | Function[];
}

const knownMethods = (): IMethodWithArgs[] => [
  { method: 'concat', args: ARRAY_ARGS },
  { method: 'copyWithin', args: ARRAY_ARGS },
  { method: 'entries', args: EMPTY_ARGS },
  { method: 'every', args: FUNCTION_ARGS },
  { method: 'fill', args: ARRAY_ARGS },
  { method: 'filter', args: FUNCTION_ARGS },
  { method: 'find', args: FUNCTION_ARGS },
  { method: 'findIndex', args: FUNCTION_ARGS },
  { method: 'flat', args: EMPTY_ARGS },
  { method: 'flatMap', args: FUNCTION_ARGS },
  { method: 'forEach', args: FUNCTION_ARGS },
  { method: 'includes', args: NUMBER_ARGS },
  { method: 'indexOf', args: NUMBER_ARGS },
  { method: 'join', args: EMPTY_ARGS },
  { method: 'keys', args: EMPTY_ARGS },
  { method: 'lastIndexOf', args: NUMBER_ARGS },
  { method: 'map', args: FUNCTION_ARGS },
  { method: 'pop', args: EMPTY_ARGS },
  { method: 'push', args: NUMBER_ARGS },
  { method: 'reduce', args: FUNCTION_ARGS },
  { method: 'reduceRight', args: FUNCTION_ARGS },
  { method: 'reverse', args: EMPTY_ARGS },
  { method: 'shift', args: EMPTY_ARGS },
  { method: 'slice', args: ARRAY_ARGS },
  { method: 'some', args: FUNCTION_ARGS },
  { method: 'sort', args: EMPTY_ARGS },
  { method: 'splice', args: ARRAY_ARGS },
  { method: 'toLocaleString', args: EMPTY_ARGS },
  { method: 'toString', args: EMPTY_ARGS },
  { method: 'unshift', args: NUMBER_ARGS },
  { method: 'values', args: EMPTY_ARGS },
];

export default knownMethods;
