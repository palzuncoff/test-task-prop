import { LOAD_ALL_POSTS, START, FAIL, SUCCESS, SORT } from '../constants';

export function loadPosts() {
    return (dispatch, getState) => {
        const { loaded } = getState().posts;
        if (!loaded) {
            dispatch({ type: LOAD_ALL_POSTS + START });

            fetch(process.env.REACT_APP_API)
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
        }
    };
}

export function sortPosts(column) {
    return {
        type: SORT,
        payload: { column },
    };
}
