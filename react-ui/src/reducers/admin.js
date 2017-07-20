import * as AdminActionTypes from '../actiontypes/admin';


//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Admin(state={}, action){
  switch (action.type) {

    case AdminActionTypes.UPDATE_STATE: {
      //MAKE BETTER LATER
      //to update data
      const keyArr = Object.keys(action.newState);

      if(keyArr.length === 1 && (keyArr[0] === "about" || keyArr[0] === "projects" || keyArr[0] === "contact")){
        return {
          ...state,
          data: {
            ...state.data,
            ...action.newState
          }
        };
      }

      else if(keyArr.length === 1 && keyArr[0] === "yPos"){
        let newCurrent = {current: state.current};
        console.log(action.newState.yPos);

        //find positions of links
        const dataKeys = Object.keys(state.data).map(link => {
          const element = document.getElementById(link);
          if(element){
            return {
              link: link,
              pos: element.offsetTop
            };
          }
        });

        //choose link
        dataKeys.forEach((k) => {
          //buffer for faster scrolling
          const lower = k.pos * 0.9;
          const upper = k.pos * 1.1;

          if(action.newState.yPos > lower && action.newState.yPos < upper){
            newCurrent.current = k.link;
          }
        });

        return {
          ...state,
          ...newCurrent
        };
      }
      else {
        //to update anything else
        return {...state, ...action.newState};
      }

    }

    default:
      return state;
  }
}
