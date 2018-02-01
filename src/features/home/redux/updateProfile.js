import {
  HOME_UPDATE_PROFILE,
} from './constants';

export function updateProfile() {
  return {
    type: HOME_UPDATE_PROFILE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_UPDATE_PROFILE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
