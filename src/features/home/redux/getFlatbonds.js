import {
  HOME_GET_FLATBONDS_BEGIN,
  HOME_GET_FLATBONDS_SUCCESS,
  HOME_GET_FLATBONDS_FAILURE,
  HOME_GET_FLATBONDS_DISMISS_ERROR,
} from './constants';

import moment from 'moment';
import axios from 'axios';
import { getRandomArbitrary, randomStatus } from '../../../helpers/numerics';

export function getFlatbonds() {

  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: HOME_GET_FLATBONDS_BEGIN,
    });
    return axios.get('https://randomuser.me/api/?results=20').then(res => dispatch({
      type: HOME_GET_FLATBONDS_SUCCESS,
      flatBonds: res.data.results.map(result => ({ address: result.location.street,
        expiryDate: moment(moment().format('DD-MM-YY'), 'DD-MM-YY').add(getRandomArbitrary(1, 365), 'days'),
        status: randomStatus() }))

    }));
  };
}


export function dismissGetFlatbondsError() {
  return {
    type: HOME_GET_FLATBONDS_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_GET_FLATBONDS_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getFlatbondsPending: true,
        getFlatbondsError: null,
      };

    case HOME_GET_FLATBONDS_SUCCESS:
      // The request is success
      return {
        ...state,
        getFlatbondsPending: false,
        getFlatbondsError: null,
        flatBonds: action.flatBonds
      };

    case HOME_GET_FLATBONDS_FAILURE:
      // The request is failed
      return {
        ...state,
        getFlatbondsPending: false,
        getFlatbondsError: action.data.error,
      };

    case HOME_GET_FLATBONDS_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getFlatbondsError: null,
      };

    default:
      return state;
  }
}
