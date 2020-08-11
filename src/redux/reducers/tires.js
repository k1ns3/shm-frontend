const initialState = {
  items: [],
  isLoaded: false,
};

const tires = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIRES':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default tires;
