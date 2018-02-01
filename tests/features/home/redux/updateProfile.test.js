import { expect } from 'chai';

import {
  HOME_UPDATE_PROFILE,
} from 'src/features/home/redux/constants';

import {
  updateProfile,
  reducer,
} from 'src/features/home/redux/updateProfile';

describe('home/redux/updateProfile', () => {
  it('returns correct action by updateProfile', () => {
    expect(updateProfile()).to.have.property('type', HOME_UPDATE_PROFILE);
  });

  it('handles action type HOME_UPDATE_PROFILE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_UPDATE_PROFILE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
