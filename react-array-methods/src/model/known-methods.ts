interface IMethodWithArgs {
  method: string;
  args: any[];
}

const knownMethods = (): IMethodWithArgs[] => [
  { method: 'concat', args: [['a', 'b', 'c']] },
  { method: 'copyWithin', args: [0, 3, 4] },
  { method: 'entries', args: [] },
  { method: 'every', args: [(item: number) => item < 4] },
  { method: 'fill', args: [0, 3, 4] },
  { method: 'filter', args: [(item: number) => item < 4] },
  { method: 'find', args: [(item: number) => item > 3] },
  { method: 'findIndex', args: [(item: number) => item > 3] },
  { method: 'flat', args: [] },
  { method: 'flatMap', args: [(item: number) => [item, item * 2]] },
  { method: 'forEach', args: [(item: number) => item * 2] },
  { method: 'includes', args: [3] },
  { method: 'indexOf', args: [3] },
  { method: 'join', args: [] },
  { method: 'keys', args: [] },
  { method: 'lastIndexOf', args: [3] },
  { method: 'map', args: [(item: number) => item * 2] },
  { method: 'pop', args: [] },
  { method: 'push', args: [15] },
  { method: 'reduce', args: [(acc: number, value: number) => acc + value] },
  { method: 'reduceRight', args: [(acc: number, value: number) => acc + value] },
  { method: 'reverse', args: [] },
  { method: 'shift', args: [] },
  { method: 'slice', args: [2, 4] },
  { method: 'some', args: [(item: number) => item < 4] },
  { method: 'sort', args: [] },
  { method: 'splice', args: [2, 3, 20] },
  { method: 'toLocaleString', args: ['ru'] },
  { method: 'toString', args: [] },
  { method: 'unshift', args: [10] },
  { method: 'values', args: [] },
];

export default knownMethods;
