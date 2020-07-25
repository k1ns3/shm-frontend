const initialState = {
  items: [],
  isLoading: false,
};

const tires = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIRES':
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default tires;
