import $ from 'jquery';
import * as AdminActionTypes from '../actiontypes/admin';

//content
import { data } from '../data/data';
const dataKeys = Object.keys(data);

//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Admin(state={}, action){

  switch (action.type) {
    case AdminActionTypes.UPDATE_STATE: {
      return {
        ...state,
        ...action.newState
      };
    }

    case AdminActionTypes.HANDLE_SCROLL: {

      const currentOffset = $(window).scrollTop();
      const newCurrent = dataKeys.filter((k) => {
        if(currentOffset >= Math.floor($(`#${k}`).offset().top)) return k;
      }, 0);

      const current = (newCurrent.length < 1) ? 'about' : newCurrent[newCurrent.length - 1];
      if(window.location.hash !== current) history.pushState(null, null, `#${current}`);

      return {...state, last: currentOffset, current};
    }

    default:
      return state;
  }
}
