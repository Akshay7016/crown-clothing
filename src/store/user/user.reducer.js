import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload }

        // After clicking on sign out button, currentUser information stays there. So from here
        // we set the currentUser to null
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null }

        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return { ...state, error: payload }
        default:
            return state;
    }
}