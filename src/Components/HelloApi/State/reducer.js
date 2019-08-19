import { combineReducers } from "redux";

import { reducer as ApiCall } from "./store";

const reducer = combineReducers({
  ApiReducer: ApiCall
});

export default reducer;
