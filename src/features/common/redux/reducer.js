import initialState from './initialState';
import { reducer as openModalReducer } from './openModal';
import { reducer as closeModalReducer } from './closeModal';

const reducers = [
  openModalReducer,
  closeModalReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
