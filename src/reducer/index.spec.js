import { Map, List } from 'immutable';
import reducer, { DefaultState } from './posts';
import { LOAD_ALL_POSTS, START, SUCCESS, FAIL, SORT, REVERSE, SORT_BY_USER } from '../constants';
import response from '../fixtures'

const error = {
    message: 'Fatal Error',
    code: '505'
};

describe('posts reducer', () => {
    const initialState = new DefaultState();

    it('handle LOAD_ALL_POSTS_START', () => {
        const action = { type: LOAD_ALL_POSTS + START };
        const nextState = reducer(initialState, action);

        expect(nextState.loading).toBe(true)
        expect(nextState.loaded).toBe(false)
    });

    it('handle LOAD_ALL_POSTS_SUCCESS', () => {
        const action = { type: LOAD_ALL_POSTS + SUCCESS, payload: { response } };
        const nextState = reducer(initialState, action);

        expect(nextState.loading).toBe(false);
        expect(nextState.loaded).toBe(true);
        expect(nextState.entities.equals(new List(response))).toBe(true);
        expect(nextState.error.equals(new Map({}))).toBe(true);
    });

    it('handle LOAD_ALL_POSTS_FAIL', () => {
        const action = { type: LOAD_ALL_POSTS + FAIL, payload: { error } };
        const nextState = reducer(initialState, action);

        expect(nextState.loading).toBe(false);
        expect(nextState.loaded).toBe(false);
        expect(nextState.error.equals(new Map(error))).toBe(true);
    });

    it('handle SORT', () => {
        const action = { type: SORT, payload: { column: SORT_BY_USER } };
        const nextState = reducer(initialState, action);

        expect(nextState.sort).toBe(SORT_BY_USER);
        expect(nextState.reverse).toBe(false);
    });

    it('handle REVERSE', () => {
        const action = { type: REVERSE };
        const nextState = reducer(initialState, action);

        expect(nextState.reverse).toBe(!initialState.reverse);
    })
})
