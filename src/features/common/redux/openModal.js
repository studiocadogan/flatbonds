import {
  COMMON_OPEN_MODAL,
} from './constants';

export function openModal(modal) {
  return {
    type: COMMON_OPEN_MODAL,
    modal
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_OPEN_MODAL:
      return {
        ...state,
        modal: action.modal
      };

    default:
      return state;
  }
}
