import renderList from './render-list/render-list';
import enableTooltips from './tooltip/tooltip';
import getArrayMethods from './array-methods/array-methods';

import './index.css';

const fillLists = () => {
  const methods = getArrayMethods();

  const mutatingListElement = document.querySelector('.mutating-list');
  const nonMutatingListElement = document.querySelector('.non-mutating-list');
  const unknownListElement = document.querySelector('.unknown-list');

  mutatingListElement.innerHTML = renderList(methods.mutating, 'mutating');
  nonMutatingListElement.innerHTML = renderList(methods.nonMutating, 'non-mutating');
  unknownListElement.innerHTML = renderList(methods.unknown, 'unknown');
};

fillLists();
enableTooltips();
