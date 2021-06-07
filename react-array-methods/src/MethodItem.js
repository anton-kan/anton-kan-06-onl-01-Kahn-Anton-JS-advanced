import React from 'react';

import './MethodItem.css';

const MethodItem = ({ method }) => {
  return (
    <li className="MethodItem" data-tooltip={method}>
      {method}
    </li>
  );
};

export default MethodItem;
