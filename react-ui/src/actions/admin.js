import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

//=======================================================


export const updateState = (newState) => {
  return {
    type: AdminActionTypes.UPDATE_STATE,
    newState
  }
}

export const getData = (url) => {
  return (dispatch) => {

    return axios.get(url)
      .then(response => {
        console.log("response", response.data);
        dispatch(updateState(response.data));
      })
      .catch(error => {
        console.log("error", error);

        dispatch(updateState({
          message: {
            error: "Unable to fetch data",
            success: ""
          }
        }));
      });
  }
};
