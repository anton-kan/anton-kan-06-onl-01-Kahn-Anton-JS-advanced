import React from 'react';
import './Tooltip.css';

const Tooltip = ({ hidden, text, left, top }) => {
  const style = {
    left,
    top,
  };
  return (
    <div className={`Tooltip ${hidden ? 'Tooltip-hidden' : ''}`} style={style}>
      {text}
    </div>
  );
};

export default Tooltip;
