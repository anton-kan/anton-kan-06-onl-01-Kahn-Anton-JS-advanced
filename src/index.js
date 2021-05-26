import renderList from './render-list/render-list';
import enableTooltips from './tooltip/tooltip';
import getArrayMethods from './array-methods/array-methods';

import './index.css';

const fillLists = () => {
  const methods = getArrayMethods();

  const mutatingListContainer = document.querySelector('.mutating-container');
  const nonMutatingListContainer = document.querySelector('.non-mutating-container');
  const unknownListContainer = document.querySelector('.unknown-container');

  mutatingListContainer.append(renderList(methods.mutating, 'mutating'));
  nonMutatingListContainer.append(renderList(methods.nonMutating, 'non-mutating'));
  unknownListContainer.append(renderList(methods.unknown, 'unknown'));
};

fillLists();
enableTooltips();
