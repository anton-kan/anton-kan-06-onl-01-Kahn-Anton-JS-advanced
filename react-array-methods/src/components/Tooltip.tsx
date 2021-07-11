import { useEffect, useState } from 'react';
import './Tooltip.css';

const Tooltip = () => {
  const [position, setPosition] = useState({ top: '0px', left: '0px' });
  const [text, setText] = useState('');
  const [display, setDisplay] = useState(false);

  const toggleTooltip = (event: Event) => {
    const targetElement = (event.target as HTMLElement).closest('[data-tooltip]') as HTMLElement;
    if (targetElement) {
      setPosition({
        top: `${targetElement.getBoundingClientRect().bottom}px`,
        left: `${targetElement.getBoundingClientRect().left}px`,
      });
      setText(targetElement.dataset.tooltip || '');
      setDisplay(true);
      return;
    }
    setPosition({ top: '0px', left: '0px' });
    setText('');
    setDisplay(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', toggleTooltip);
    return () => document.removeEventListener('mousemove', toggleTooltip);
  });

  const style = {
    left: position.left,
    top: position.top,
  };
  return (
    <div className={`Tooltip ${!display && 'Tooltip-hidden'}`} style={style}>
      {text}
    </div>
  );
};

export default Tooltip;
