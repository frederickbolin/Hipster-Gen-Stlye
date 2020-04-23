import { UserActionTypes } from "./user.types";


const  INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
};

// Im creating a function thats getting the state object and an action..... its depending on what type of action it is......meaning switch with the type of action being called will check if type action is equal to set_current_User.

export default userReducer;