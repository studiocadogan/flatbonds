import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_GET_FLATBONDS_BEGIN,
  HOME_GET_FLATBONDS_SUCCESS,
  HOME_GET_FLATBONDS_FAILURE,
  HOME_GET_FLATBONDS_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  getFlatbonds,
  dismissGetFlatbondsError,
  reducer,
} from 'src/features/home/redux/getFlatbonds';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getFlatbonds', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getFlatbonds succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getFlatbonds())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_GET_FLATBONDS_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_GET_FLATBONDS_SUCCESS);
      });
  });

  it('dispatches failure action when getFlatbonds fails', () => {
    const store = mockStore({});

    return store.dispatch(getFlatbonds({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_GET_FLATBONDS_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_GET_FLATBONDS_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissGetFlatbondsError', () => {
    const expectedAction = {
      type: HOME_GET_FLATBONDS_DISMISS_ERROR,
    };
    expect(dismissGetFlatbondsError()).to.deep.equal(expectedAction);
  });

  it('handles action type HOME_GET_FLATBONDS_BEGIN correctly', () => {
    const prevState = { getFlatbondsPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_FLATBONDS_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getFlatbondsPending).to.be.true;
  });

  it('handles action type HOME_GET_FLATBONDS_SUCCESS correctly', () => {
    const prevState = { getFlatbondsPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_FLATBONDS_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getFlatbondsPending).to.be.false;
  });

  it('handles action type HOME_GET_FLATBONDS_FAILURE correctly', () => {
    const prevState = { getFlatbondsPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_FLATBONDS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getFlatbondsPending).to.be.false;
    expect(state.getFlatbondsError).to.exist;
  });

  it('handles action type HOME_GET_FLATBONDS_DISMISS_ERROR correctly', () => {
    const prevState = { getFlatbondsError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_FLATBONDS_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getFlatbondsError).to.be.null;
  });
});
