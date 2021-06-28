const listsReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'MOVE':
      state[action.payload.dest] = [...state[action.payload.dest], action.payload.method];
      state[action.payload.source] = state[action.payload.source].filter((item) => item !== action.payload.method);
      return { ...state };
    default:
      return state;
  }
};

export default listsReducer;
