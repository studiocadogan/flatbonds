import { expect } from 'chai';

import {
  COMMON_OPEN_MODAL,
} from 'src/features/common/redux/constants';

import {
  openModal,
  reducer,
} from 'src/features/common/redux/openModal';

describe('common/redux/openModal', () => {
  it('returns correct action by openModal', () => {
    expect(openModal()).to.have.property('type', COMMON_OPEN_MODAL);
  });

  it('handles action type COMMON_OPEN_MODAL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_OPEN_MODAL }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
