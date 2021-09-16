export const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW":
      return action.payload;
    default:
      return state;
  }
};
