import { createSelector } from 'reselect';

const postsSelector = state => state.posts.entities;
const getSortCriterion = state => state.posts.sort;
const getReverse = state => state.posts.reverse

export const sortedPosts = createSelector(
    postsSelector, getSortCriterion, getReverse,
    (posts, column, reverse) => {
        const sorted = posts.sort((a, b) => {
            if (a[column] < b[column]) { return -1; }
            if (a[column] > b[column]) { return 1; }
            return 0;
        })
        if (reverse) return sorted.reverse().toArray()
        return sorted.toArray()
    }
);

export const getPostLoaded = state => state.posts.loaded;
export const getPostsLoading = state => state.posts.loading;
