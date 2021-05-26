const renderItem = (item, tooltip) => {
  const liElement = document.createElement('li');
  liElement.dataset.tooltip = `${item} is a ${tooltip} method`;
  liElement.innerText = item;
  return liElement;
};

export default renderItem;
