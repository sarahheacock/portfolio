
import * as AdminActionTypes from '../actiontypes/admin';


//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Admin(state={}, action){
  switch (action.type) {
    case AdminActionTypes.HANDLE_SCROLL: {
      //create a scrollspy when scrolling
      //also updates url when current changes
      return {
        ...state
      }
    }

    case AdminActionTypes.HANDLE_CLICK: {
      //transitions to correct position
      //updates url
      //transitions out
      return {
        ...state
      }
    }

    default:
      return state;
  }
}



  //MAKE BETTER LATER
  //to update data

  // console.log(window.location);
  //
  // if(window.location.hash.slice(1) !== current){
  //   //everytime current is updated, so is the url
  //   const domain = `${window.location.origin}#${current}`;
  //   //window.location.href = domain;
  //
  //   const content = document.getElementById("main");
  //   if(content){
  //     content.style["margin-top"] = `${0}px`;
  //     content.style.transition = 'all';
  //
  //     //const domain = `${window.location.origin}#${current}`;
  //     window.location.href = domain;
  //   }
  // }

  // if(this.props.current !== targName){
  //   const element = document.getElementById(targName);
  //   if(element){
  //     //move up
  //     const oldOffset = window.pageYOffset;
  //     const newOffset = element.offsetTop;
  //     const buffer = document.getElementById(this.props.links[0]).offsetTop;
  //     const change = buffer - newOffset;
  //     //const another = (change > 0) ? buffer : buffer * -1;
  //     console.log("oldOffset", oldOffset);
  //     console.log("newOffset", newOffset);
  //     console.log("buffer", buffer);
  //     console.log("change", change);
  //
  //     if(change !== 0){
  //       const content = document.getElementById("main");
  //       //content.style.transform = `translateY(${change}px)`;
  //       //console.log("transform", content.style.transform);
  //       content.style["margin-top"] = `${change}px`;
  //       content.style.transition = 'all 1000ms ease-in-out';
  //
  //
  //       //change
  //       setTimeout(() => {
  //         console.log(content.style);
  //         this.props.updateState({"current": targName});
  //       }, 1100);
  //     }
  //
  //
  //     //setTimeout(() => { this.props.updateState({"current": targName}); }, 1100);
  //
  //     //move back down
  //
  //
  //   }
  // }


//   const keyArr = Object.keys(action.newState);
//
//   if(keyArr.length === 1 && (keyArr[0] === "about" || keyArr[0] === "projects" || keyArr[0] === "contact")){
//     return {
//       ...state,
//       data: {
//         ...state.data,
//         ...action.newState
//       }
//     };
//   }
//
//   else if(keyArr.length === 1 && keyArr[0] === "yPos"){
//     let newCurrent = {current: state.current};
//     console.log(action.newState.yPos);
//
//     //find positions of links
//     const dataKeys = Object.keys(state.data).map(link => {
//       const element = document.getElementById(link);
//       if(element){
//         return {
//           link: link,
//           pos: element.offsetTop
//         };
//       }
//     });
//
//     //choose link
//     dataKeys.forEach((k) => {
//       //buffer for faster scrolling
//       const diff = window.innerHeight * 0.05
//       const lower = k.pos - diff;
//       const upper = k.pos + diff;
//
//       if(action.newState.yPos > lower && action.newState.yPos < upper){
//         newCurrent.current = k.link;
//       }
//     });
//
//     return {
//       ...state,
//       ...newCurrent
//     };
//   }
//   else {
//     //to update anything else
//     return {...state, ...action.newState};
//   }
//
// }
