import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

import { windowOffset, messageData, messageStatus } from '../data/data';

//=======================================================
export const updateState = (newState) => {
  return {
    type: AdminActionTypes.UPDATE_STATE,
    newState
  }
}

export const handleResize = () => {
  return {
    type: AdminActionTypes.HANDLE_RESIZE
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


export const handleClick = (newState) => {
  return(dispatch) => {
    //transitions to correct position
    // if(screen.width <= 980) window.location.hash = newState.current;
    const max = Math.floor(newState.range/15);
    console.log("max", max);

    const stop = newState.stop;
    const start = windowOffset();
    const x = Math.abs(stop - start);

    const a = max * -1 / Math.pow(newState.range, 2);
    const pow = Math.pow((x - newState.range), 2);
    const y = Math.ceil(a * pow) + max;
    const change = (y <= 0) ? 1 : y;
    const time = 0.0001;


    // console.log("range", newState.range);
    // console.log("x", x);
    // console.log("a", a);
    // console.log("pow", pow);
    //
    // console.log("height", height);
    // console.log("start", start);
    // console.log("change", change);

    if(stop > start) {
      if(stop - start < change) document.body.scrolltop = stop;
      else document.body.scrollTop += change;
    }
    else if(stop < start) {
      if(start - stop < change) document.body.scrolltop = stop;
      else document.body.scrollTop -= change;
    }
    else if(start === stop){
      // window.location.hash = newState.current;
      // document.body.scrolltop = stop;
      return dispatch(handleScroll());
    }


    return window.setTimeout(function(){
      return dispatch(handleClick(newState));
    }, time);

  }
}



// export const getData = (url) => {
//   return (dispatch) => {
//
//     return axios.get(url)
//       .then(response => {
//         console.log("response", response.data);
//         dispatch(updateState(response.data));
//       })
//       .catch(error => {
//         console.log("error", error);
//
//         dispatch(updateState({
//           message: {
//             error: "Unable to fetch data",
//             success: ""
//           }
//         }));
//       });
//   }
// };
