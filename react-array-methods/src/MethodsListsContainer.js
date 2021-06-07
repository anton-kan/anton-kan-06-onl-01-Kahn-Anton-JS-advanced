import React from 'react';
import MethodsList from './MethodsList';
import mutatingMethods from './controller/mutating-methods';
import nonMutatingMethods from './controller/non-mutating-methods';
import unknownMethods from './controller/unknown-methods';

import './MethodsListsContainer.css';

function MethodsListsContainer() {
  return (
    <div className="MethodsListsContainer">
      <MethodsList title="Mutating" methods={mutatingMethods()} />
      <MethodsList title="Non-mutating" methods={nonMutatingMethods()} />
      <MethodsList title="Unknown" methods={unknownMethods()} />
    </div>
  );
}

export default MethodsListsContainer;
