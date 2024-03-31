let initialState = {
  counter: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  console.log("action은ㅇ뭘까", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DOWN":
      return { ...state, counter: state.counter - action.payload.down };

    default:
      return { ...state };
  }

  return { ...state };
}

export default reducer;
