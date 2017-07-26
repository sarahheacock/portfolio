
import * as AdminActionTypes from '../actiontypes/admin';

//content
import { data, buffer, windowOffset, windowInnerHeight, scrollHeight, contentHeight} from '../data/data';
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

    case AdminActionTypes.HANDLE_RESIZE: {
      let sections = {};
      let current = state.current;
      const length = dataKeys.length;

      const currentOffset = windowOffset();
      dataKeys.forEach((k, i) => {

        const element = document.getElementById(k);
        if(element){
          const diff = Math.floor(element.scrollHeight || element.clientHeight); // height of section

          sections[k] = {
            min: Math.floor(element.offsetTop),
            max: Math.floor(element.offsetTop) + diff - 1
          };

          if(currentOffset >= sections[k]["min"] && currentOffset < sections[k]["max"]){
            current = k;
            if(!window.location.hash.includes(current)){
              window.location.hash = k;
              window.stop();
            }
          }
        }
      });

      const first = dataKeys[0];
      const last = dataKeys[length - 1];
      const pen = dataKeys[length - 2];

      if(sections[last]){
        const scrollH = scrollHeight();
        const contentH = contentHeight();
        const windowHeight = windowInnerHeight();

        const margin = scrollH - contentH - sections[first]["min"];
        const lastHeight = sections[last]["max"] - sections[last]["min"] + 1;
        //
        // console.log("windowHeight", windowHeight);
        // console.log("margin", margin);
        // console.log("scrollH", scrollH);
        // console.log("conentH", contentH);
        // console.log("lastHeight", lastHeight);

        if(lastHeight < windowHeight - margin && length > 1){
          sections[pen]["max"] = scrollH - windowHeight - 1;
          sections[last]["min"] = scrollH - windowHeight;
        }

        if(currentOffset < sections[first]["min"]){
          current = first;
          window.location.hash = first;
          window.stop();
        }
        else if(currentOffset > sections[last]["max"]){
          current = last;
          window.location.hash = last;
          window.stop();
        }
      }

      return {...state, last: currentOffset, current, sections};
    }

    case AdminActionTypes.HANDLE_SCROLL: {
      let current = state.current;

      const currentOffset = windowOffset();
      dataKeys.forEach((k, i) => {
        const max = state.sections[k]["max"];
        const min = state.sections[k]["min"];

        if(currentOffset >= min && currentOffset <= max){
          const jump = Math.abs(state.last - currentOffset); //jump depends on speed of scrolling
          const newMax = min + jump;

          if(currentOffset < newMax){
            current = k;
            window.location.hash = k;
            window.stop();
          }
        }
      });

      return {...state, last: currentOffset, current};
    }



    default:
      return state;
  }
}
