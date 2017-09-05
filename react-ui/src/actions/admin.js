import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

import { messageData, messageStatus } from '../data/data';

//=======================================================
export const updateState = (newState) => {
  return {
    type: AdminActionTypes.UPDATE_STATE,
    newState
  }
}


export const handleScroll = () => {
  return {
    type: AdminActionTypes.HANDLE_SCROLL
  }
}

export const sayHello = (message) => {
  return (dispatch) => {
    //make sure areas are filled
    const valid = Object.keys(message).reduce((a, b) => {
      return a && ((message[b] !== '' && message[b] !== undefined) || b === 'error');
    }, true);

    if(!valid) return dispatch(updateState({ message: {...message, error: messageStatus.formError} }))

    return axios.post('/page/sayHello', message)
      .then(response => {
        console.log("response", response.data);

        let newMessage = {};
        Object.keys(messageData).forEach(k => newMessage[k] = '');

        if(response.data.success) dispatch(updateState({ message: {...newMessage, 'error': messageStatus.success }}));
      })
      .catch(error => {
        console.log("error", error);

        dispatch(updateState({
          message: {...message, error: messageStatus.error}
        }));
      });
  }
};
