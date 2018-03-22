import { Record, Map, List } from 'immutable';
import { LOAD_ALL_POSTS, START, SUCCESS, FAIL } from '../constants';

const DefaultState = Record({
  loading: false,
  loaded: false,
  entities: new List([]),
  error: new Map({}),
});

export default (state = new DefaultState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ALL_POSTS + START:
      return state.setIn(['loading'], true).setIn(['loaded'], false);

    case LOAD_ALL_POSTS + SUCCESS:
      return state.mergeIn(['entities'], payload.response)
        .setIn(['loading'], false).setIn(['loaded'], true);

    case LOAD_ALL_POSTS + FAIL:
      return state.setIn(['error'], payload.error)
        .setIn(['loading'], false).setIn(['loaded'], false);

    default:
      return state;
  }
};
