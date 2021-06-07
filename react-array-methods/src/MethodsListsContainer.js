import React from 'react';
import { useState } from 'react';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';

import mutatingMethods from './controller/mutating-methods';
import nonMutatingMethods from './controller/non-mutating-methods';
import unknownMethods from './controller/unknown-methods';

import './MethodsListsContainer.css';

const MethodsListsContainer = () => {
  const [tooltipState, setTooltipState] = useState({ hidden: true, text: '', left: '0px', top: '0px' });

  const toggleTooltip = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const targetElement = document.elementFromPoint(x, y);
    if (targetElement.tagName.toUpperCase() === 'LI') {
      setTooltipState({
        hidden: false,
        text: targetElement.dataset.tooltip,
        left: `${targetElement.getBoundingClientRect().left}px`,
        top: `${targetElement.getBoundingClientRect().bottom}px`,
      });
    } else {
      setTooltipState({ hidden: true, text: '', left: '0px', top: '0px' });
    }
  };

  return (
    <div className="MethodsListsContainer" onMouseMove={toggleTooltip}>
      <Tooltip hidden={tooltipState.hidden} text={tooltipState.text} left={tooltipState.left} top={tooltipState.top} />
      <MethodsList title="Mutating" methods={mutatingMethods()} />
      <MethodsList title="Non-mutating" methods={nonMutatingMethods()} />
      <MethodsList title="Unknown" methods={unknownMethods()} />
    </div>
  );
};

export default MethodsListsContainer;
