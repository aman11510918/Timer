export const initialState = {
  minute: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TIME":
      // console.log("Action called with value:", action.payload);
      return {
        minute: action.payload,
      };

    default:
      return state;
  }
};
