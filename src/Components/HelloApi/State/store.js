const INITIAL_STATE = {
  data: null,
  error: null,
  hasError: false,
  success: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        data: action.payload,
        error: null,
        hasError: false,
        success: true,
        apiType: "success"
      };
    case "fail":
      return {
        ...state,
        data: null,
        error: action.payload,
        hasError: true,
        success: false,
        apiType: "fail"
      };
    default:
      return state;
  }
};
