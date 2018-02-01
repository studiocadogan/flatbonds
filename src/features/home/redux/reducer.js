import initialState from './initialState';
import { reducer as updateProfileReducer } from './updateProfile';
import { reducer as getFlatbondsReducer } from './getFlatbonds';
import { reducer as addNewFlatbondReducer } from './addNewFlatbond';

const reducers = [
  updateProfileReducer,
  getFlatbondsReducer,
  addNewFlatbondReducer,

];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Put global reducers here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
