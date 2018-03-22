import { createSelector } from 'reselect';

const postsSelector = state => state.posts.entities;
const getSortCriterion = (_, column) => column;

export const sortedPosts = createSelector(
  postsSelector, getSortCriterion,
  (posts, column) => posts.sort((a, b) => {
    if (a[column] < b[column]) { return -1; }
    if (a[column] > b[column]) { return 1; }
    if (a[column] === b[column]) { return 0; }
  }).toArray(),
);
