import knownMethods from '../model/known-methods';
import isMutating from './is-mutating';
import sampleArray from './sample-array';

const mutatingMethods = () =>
  knownMethods()
    .filter(({ method, args }) => isMutating(sampleArray(), method, args))
    .map((item) => item.method);

export default mutatingMethods;
