
import * as AdminActionTypes from '../actiontypes/admin';

//content
import { data, buffer } from '../data/data';


//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Admin(state={}, action){
  switch (action.type) {
    case AdminActionTypes.HANDLE_SCROLL: {
      //create a scrollspy when scrolling
      let newState = {...state};
      const currentOffset = document.body.scrollTop; //current distance scrolled down
      const direction = state.last > currentOffset; //true means scroll up
      //if(direction !== state.direction) return newState;

      const dataKeys = Object.keys(data);
      dataKeys.forEach((k, i) => {
        //get elements distance from top
        const element = document.getElementById(k);
        const previous = (i === 0) ? 0 : document.getElementById(dataKeys[i - 1]);

        //min range of element before changing
        //scrolling up, min is top edge of previous element
        //scrolling down, min is top edge of this element
        const min = (direction) ?
          ((i === 0) ? 0 : previous.offsetTop):
          element.offsetTop;

        //max range of element before changing
        //scrolling up, max is bottom edge of previous element
        //scrolling down, max is bottom edge of this
        const max = (direction) ?
          ((i === 0) ? element.offsetTop - 1 : previous.offsetTop + previous.offsetHeight - 2):
          element.offsetTop + element.offsetHeight - 2;

        console.log(k + " " + currentOffset + " " + min + " " + max);
        //console.log("direction " + direction);

        //windows current location is within change, update
        if(currentOffset >= min && currentOffset < max){
          //update current position
          //update url
          newState.current = k;
          if(!window.location.hash.includes(k)){
            window.location.hash = k;
            window.stop();
          }
        }
      });
      return {...newState, last: currentOffset};
    }


    default:
      return state;
  }
}
