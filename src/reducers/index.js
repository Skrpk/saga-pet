import { Map } from 'immutable';

import constants from '../constants/actionConstants'

const initial = Map({
  users: [],
});

const reducer = (state = initial, action) => {
  switch (action.type) {
    case constants.GET_USERS: {
      debugger
      return state.set('users', action.payload);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
