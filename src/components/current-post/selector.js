import { createSelector } from "reselect";

const postsSelector = state => state.posts;
const currentIdSelector = state => state.currentPostId;

export const currentPostSelector = createSelector(
  postsSelector,
  currentIdSelector,
  (posts, currentId) => {
    if (currentId === -1) return null;
    return posts[currentId] || null;
  }
);
