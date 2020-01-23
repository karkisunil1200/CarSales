export const InitialState = {
  name: '',
  price: ''
};

export const addReducer = (state = initialState, action) => {
  switch (action.payload) {
    case ADD_FEATURES:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
