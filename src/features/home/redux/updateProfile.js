import {
  HOME_UPDATE_PROFILE,
} from './constants';

export function updateProfile(userData) {
  return {
    type: HOME_UPDATE_PROFILE,
    userData
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_UPDATE_PROFILE:
      return {
        ...state,
        userData: action.userData
      };

    default:
      return state;
  }
}
