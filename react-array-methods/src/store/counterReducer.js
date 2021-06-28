const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return 0;
    case 'INCREMENT':
      return state + 1;
    default:
      return state || 0;
  }
};

export default counterReducer;
