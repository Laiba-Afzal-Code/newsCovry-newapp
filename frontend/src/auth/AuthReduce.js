const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFatching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.paylord,
          isFatching: true,
          error: false,
        };
      case "LOGIN_FAILED":
        return {
          user: null,
          isFatching: false,
          error: action.paylord,
        };
      case "LOGOUT":
        return {
          user: null,
          isFatching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  export default Reducer;