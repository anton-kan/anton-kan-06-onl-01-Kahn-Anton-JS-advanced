import renderItem from './render-item/render-item';

const renderList = (array, tooltip) => {
  const listElement = array.reduce((list, item) => {
    list.append(renderItem(item, tooltip));
    return list;
  }, document.createElement('ul'));
  return listElement;
};

export default renderList;
