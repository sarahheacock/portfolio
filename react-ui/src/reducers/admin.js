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
          if(k.pos - dataKeys[0]["pos"] <= action.newState.yPos) newCurrent.current = k.link;
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
