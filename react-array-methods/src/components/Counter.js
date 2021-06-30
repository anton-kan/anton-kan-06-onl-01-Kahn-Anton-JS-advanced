import React from 'react';

import { useSelector } from 'react-redux';

const Counter = () => {
  const value = useSelector((state) => state.counter);
  return <div>Clicks: {value}</div>;
};

export default Counter;
