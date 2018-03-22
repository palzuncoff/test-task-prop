import { LOAD_ALL_POSTS, START, FAIL, SUCCESS } from '../constants';

export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: LOAD_ALL_POSTS + START });

    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (res.status >= 400) throw new Error(res.statusText);
        return res.json();
      })
      .then(response => dispatch({
        type: LOAD_ALL_POSTS + SUCCESS,
        payload: { response },
      }))
      .catch((error) => {
        dispatch({
          type: LOAD_ALL_POSTS + FAIL,
          payload: { error },
        });
      });
  };
}
