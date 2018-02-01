import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_ADD_NEW_FLATBOND_BEGIN,
  HOME_ADD_NEW_FLATBOND_SUCCESS,
  HOME_ADD_NEW_FLATBOND_FAILURE,
  HOME_ADD_NEW_FLATBOND_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  addNewFlatbond,
  dismissAddNewFlatbondError,
  reducer,
} from 'src/features/home/redux/addNewFlatbond';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/addNewFlatbond', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when addNewFlatbond succeeds', () => {
    const store = mockStore({});

    return store.dispatch(addNewFlatbond())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_ADD_NEW_FLATBOND_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_ADD_NEW_FLATBOND_SUCCESS);
      });
  });

  it('dispatches failure action when addNewFlatbond fails', () => {
    const store = mockStore({});

    return store.dispatch(addNewFlatbond({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_ADD_NEW_FLATBOND_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_ADD_NEW_FLATBOND_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissAddNewFlatbondError', () => {
    const expectedAction = {
      type: HOME_ADD_NEW_FLATBOND_DISMISS_ERROR,
    };
    expect(dismissAddNewFlatbondError()).to.deep.equal(expectedAction);
  });

  it('handles action type HOME_ADD_NEW_FLATBOND_BEGIN correctly', () => {
    const prevState = { addNewFlatbondPending: false };
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_FLATBOND_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addNewFlatbondPending).to.be.true;
  });

  it('handles action type HOME_ADD_NEW_FLATBOND_SUCCESS correctly', () => {
    const prevState = { addNewFlatbondPending: true };
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_FLATBOND_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addNewFlatbondPending).to.be.false;
  });

  it('handles action type HOME_ADD_NEW_FLATBOND_FAILURE correctly', () => {
    const prevState = { addNewFlatbondPending: true };
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_FLATBOND_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addNewFlatbondPending).to.be.false;
    expect(state.addNewFlatbondError).to.exist;
  });

  it('handles action type HOME_ADD_NEW_FLATBOND_DISMISS_ERROR correctly', () => {
    const prevState = { addNewFlatbondError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_ADD_NEW_FLATBOND_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.addNewFlatbondError).to.be.null;
  });
});
