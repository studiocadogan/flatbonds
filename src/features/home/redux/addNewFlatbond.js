import {
  HOME_ADD_NEW_FLATBOND_BEGIN,
  HOME_ADD_NEW_FLATBOND_SUCCESS,
  HOME_ADD_NEW_FLATBOND_FAILURE,
  HOME_ADD_NEW_FLATBOND_DISMISS_ERROR,
} from './constants';

import axios from 'axios';
import moment from 'moment';

export function addNewFlatbond() {
  return (dispatch) => {
    dispatch({
      type: HOME_ADD_NEW_FLATBOND_BEGIN,
    });

    return axios.get('https://randomuser.me/api/').then(res => dispatch({
      type: HOME_ADD_NEW_FLATBOND_SUCCESS,
      address: res.data.results[0].location.street
    }));
  };
}


export function dismissAddNewFlatbondError() {
  return {
    type: HOME_ADD_NEW_FLATBOND_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_ADD_NEW_FLATBOND_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        addNewFlatbondPending: true,
        addNewFlatbondError: null,
      };

    case HOME_ADD_NEW_FLATBOND_SUCCESS:
      // The request is success
      return {
        ...state,
        addNewFlatbondPending: false,
        addNewFlatbondError: null,
        flatBonds: [...state.flatBonds, { address: action.address, status: 'Open', expiryDate: moment().add(30, 'd') }]
      };

    case HOME_ADD_NEW_FLATBOND_FAILURE:
      // The request is failed
      return {
        ...state,
        addNewFlatbondPending: false,
        addNewFlatbondError: action.data.error,
      };

    case HOME_ADD_NEW_FLATBOND_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        addNewFlatbondError: null,
      };

    default:
      return state;
  }
}
