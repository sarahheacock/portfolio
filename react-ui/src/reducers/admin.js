
import * as AdminActionTypes from '../actiontypes/admin';

//content
import { data, buffer } from '../data/data';
const dataKeys = Object.keys(data);


//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Admin(state={}, action){
  const main = document.getElementById('main');
  const margin = (main) ? Math.floor(main.style["margin-bottom"]) : 0;
  //window variables
  const currentOffset = Math.floor(document.body.scrollTop); //current distance scrolled down
  const currentHeight = Math.floor(document.body.scrollHeight);
  const windowHeight = Math.floor(window.innerHeight);

  switch (action.type) {

    case AdminActionTypes.HANDLE_RESIZE: {
      let sections = {};
      let current = state.current;

      const lastSection = document.getElementById(dataKeys[dataKeys.length - 1]);
      const lastHeight = Math.floor(lastSection.offsetHeight);

      dataKeys.forEach((k, i) => {
        //get elements distance from top
        const element = document.getElementById(k);
        const previous = (i === 0) ? 0 : document.getElementById(dataKeys[i - 1]);

        let min = Math.floor(element.offsetTop);
        let max = Math.floor(element.offsetTop) + Math.floor(element.offsetHeight) - 1;

        //if(i === 0) min = 0;

        //last section does not reach top of the screen
        console.log(lastHeight + " < " + windowHeight);
        if(lastHeight < windowHeight){
          console.log("hello");
          if(i === dataKeys.length - 1){
            min = currentHeight - windowHeight;
            max = currentHeight;
          }
          else if(i === dataKeys.length - 2){
            max = currentHeight - windowHeight - 1;
          }
        }
        else {
          console.log("bye");
        }

        sections[k] = {
          min: min,
          max: max
        }

        //windows current location is within change, update
        if(sections[k]){
          if(currentOffset >= sections[k]["min"] && currentOffset < sections[k]["max"]){
            //update current position
            //update url
            current = k;
            if(!window.location.hash.includes(k)){
              window.location.hash = k;
              window.stop();
            }
          }

        }

      });
      if(sections[0]){
        if(currentOffset < sections[0]["min"]){
          window.location.hash = dataKeys[0];
          window.stop();
        }
      }

      return {...state, last: currentOffset, current: current, sections: sections};
    }

    case AdminActionTypes.HANDLE_SCROLL: {
      let current = state.current;
      console.log(windowHeight + " + " + currentOffset + " = " + currentHeight);

      if(action.newCurrent){
        current = action.newCurrent;
        const min = state["sections"][current]["min"];

        if(!window.location.hash.includes(current) && currentOffset === min){
          window.location.hash = current;
          window.stop();
        }
      }
      else {
        dataKeys.forEach((k, i) => {
          //going up, decrease max
          const direction = state.last > currentOffset; //true means scroll up
          // const max = (direction) ? state["sections"][k]["max"] * 0.2 : state["sections"][k]["max"];
          const max = state["sections"][k]["max"];
          const min = state["sections"][k]["min"];

          //windows current location is within change, update
          if(currentOffset >= min && currentOffset < max){
            //update current position
            //update url
            const newMax = min * 1.2;
            current = k;
            if(!window.location.hash.includes(k) && currentOffset >= min && currentOffset < newMax){
              window.location.hash = k;
              window.stop();
            }
          }
        });
      }

      return {...state, last: currentOffset, current: current};
    }



    default:
      return state;
  }
}
