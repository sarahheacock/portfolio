import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

import { buffer } from '../data/data';

//=======================================================


export const handleScroll = () => {
  return {
    type: AdminActionTypes.HANDLE_SCROLL
  }
}

export const handleClick = (newState) => {
  return(dispatch) => {
    //transitions to correct position
    const link = newState.current;
    const range = Math.abs(newState.range/2);

    const stop = document.getElementById(link).offsetTop + 1;
    const start = document.body.scrollTop;
    const x = Math.abs(stop - start);
    const a = Math.pow(1/range, 2) * -1;
    const pow = Math.pow((x - range), 2);
    const time = (a * pow + 1) * 0.1;
    //const time = 0.0001

    // console.log("x", x);
    // console.log("a", a);
    // console.log("pow", pow);
    // console.log("range", range);
    // console.log("stop", stop);
    // console.log("start", start);
    console.log("time", time);

    if(stop > start) {
      if(stop - start < buffer) document.body.scrolltop = stop;
      else document.body.scrollTop += buffer;
    }
    else if(stop < start) {
      if(start - stop < buffer) document.body.scrolltop = start;
      else document.body.scrollTop -= buffer;
    }


    return window.setTimeout(function(){
      if(start === stop){
        return dispatch(handleScroll());
      }
      else {
        return dispatch(handleClick(newState));
      }
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
