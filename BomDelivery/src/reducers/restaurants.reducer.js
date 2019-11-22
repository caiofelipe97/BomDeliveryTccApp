const initialState = {
  loaded: [],
  selected: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESTAURANTS_LOADED_SUCCESS':
      return {
        ...state,
        loaded: action.payload,
        loading: false,
      };
    default:
      return initialState;
  }
};
