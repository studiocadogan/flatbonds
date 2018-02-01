import {
  COMMON_CLOSE_MODAL,
} from './constants';

export function closeModal() {
  return {
    type: COMMON_CLOSE_MODAL,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_CLOSE_MODAL:
      return {
        ...state,
        modal: { ...state.modal, open: false }
      };

    default:
      return state;
  }
}
