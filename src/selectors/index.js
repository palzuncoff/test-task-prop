import { createSelector } from 'reselect';

const postsSelector = state => state.posts.entities;
const getSortCriterion = state => state.posts.sort;

export const sortedPosts = createSelector(
  postsSelector, getSortCriterion,
  (posts, column) => posts.sort((a, b) => {
    if (a[column] < b[column]) { return -1; }
    if (a[column] > b[column]) { return 1; }
    return 0;
  }).toArray(),
);

export const getPostLoaded = state => state.posts.loaded;
export const getPostsLoading = state => state.posts.loading;
