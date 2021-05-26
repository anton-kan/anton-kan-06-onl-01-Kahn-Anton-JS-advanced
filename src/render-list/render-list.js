import renderItem from './render-item/render-item';

const renderList = (array, tooltip) => array.map((item) => renderItem(item, tooltip)).join('');

export default renderList;
