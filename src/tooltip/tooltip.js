import './tooltip.css';

const tooltipElement = document.querySelector('.tooltip');

const toggleTooltip = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const targetElement = document.elementFromPoint(x, y);
  if (targetElement.tagName.toUpperCase() === 'LI') {
    tooltipElement.style.left = `${targetElement.getBoundingClientRect().left}px`;
    tooltipElement.style.top = `${targetElement.getBoundingClientRect().bottom}px`;
    tooltipElement.innerText = targetElement.dataset.tooltip;
    tooltipElement.classList.remove('hidden');
  } else {
    tooltipElement.classList.add('hidden');
  }
};

const addTooltipsListener = () => document.addEventListener('mousemove', toggleTooltip);

export default addTooltipsListener;
