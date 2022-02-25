import {ActionTypes} from "./ActionType"
export const setloadUsers=(stateData)=>{
    // data come from ui in stateData
    console.log("action data",stateData);
      return{
          type :ActionTypes.CALL,
          payload : stateData
      }
  }