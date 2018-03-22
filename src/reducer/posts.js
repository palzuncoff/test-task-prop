import { LOAD_ALL_POSTS, START, SUCCESS } from '../constants';
import { Record, Map } from 'immutable';

const defaultState = Record({
  loading: false,
  loaded: false,
  entities: [],
  error: new Map({}),
});

export default (state = new defaultState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ALL_POSTS + START:
      return state.setIn(['loading'], true).setIn(['loaded'], false);

    case LOAD_ALL_POSTS + SUCCESS:
      return state.mergeIn(['entities'], payload.response)
        .setIn(['loading'], false).setIn(['loaded'], true);

    default:
      return state;
  }
};
