import React from 'react';
import MethodItem from './MethodItem';

const MethodsList = ({ title, methods }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {methods.map((method) => (
          <MethodItem key={method} method={method} />
        ))}
      </ul>
    </div>
  );
};

export default MethodsList;
