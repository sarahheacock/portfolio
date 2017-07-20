import * as AdminActionTypes from '../actiontypes/admin';
import axios from 'axios';

//=======================================================


export const handleScroll = () => {
  return {
    type: AdminActionTypes.HANDLE_SCROLL
  }
}

export const handleClick = (newState) => {
  return {
    type: AdminActionTypes.HANDLE_CLICK,
    newState
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
