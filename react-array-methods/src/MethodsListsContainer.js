import React from 'react';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';

import mutatingMethods from './controller/mutating-methods';
import nonMutatingMethods from './controller/non-mutating-methods';
import unknownMethods from './controller/unknown-methods';

import './MethodsListsContainer.css';

const MethodsListsContainer = () => {
  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      <MethodsList title="Mutating" methods={mutatingMethods()} />
      <MethodsList title="Non-mutating" methods={nonMutatingMethods()} />
      <MethodsList title="Unknown" methods={unknownMethods()} />
    </div>
  );
};

export default MethodsListsContainer;
