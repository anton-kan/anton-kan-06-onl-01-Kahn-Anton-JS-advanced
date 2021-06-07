import React from 'react';
import MethodsList from './MethodsList';
import getArrayMethods from './controller/array-methods';
import './MethodsListsContainer.css';

function MethodsListsContainer() {
  const arrayMethods = getArrayMethods();

  return (
    <div className="MethodsListsContainer">
      <MethodsList title="Mutating" methods={arrayMethods.mutating} />
      <MethodsList title="Non-mutating" methods={arrayMethods.nonMutating} />
      <MethodsList title="Unknown" methods={arrayMethods.unknown} />
    </div>
  );
}

export default MethodsListsContainer;
