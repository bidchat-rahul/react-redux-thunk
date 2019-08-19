import axios from "axios";
export const callGetAPI = urlLink => dispatch => {
  axios
    .get(urlLink, {
      headers: { "Content-Type": "application/json" }
    })
    .then(({ data }) => {
      console.log("Get Data", data);
      dispatch({
        type: "success",
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: "fail",
        payload: error
      });
    });
};
