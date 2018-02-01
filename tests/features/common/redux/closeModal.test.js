import { expect } from 'chai';

import {
  COMMON_CLOSE_MODAL,
} from 'src/features/common/redux/constants';

import {
  closeModal,
  reducer,
} from 'src/features/common/redux/closeModal';

describe('common/redux/closeModal', () => {
  it('returns correct action by closeModal', () => {
    expect(closeModal()).to.have.property('type', COMMON_CLOSE_MODAL);
  });

  it('handles action type COMMON_CLOSE_MODAL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_CLOSE_MODAL }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
