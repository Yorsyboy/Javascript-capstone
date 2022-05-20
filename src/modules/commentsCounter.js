import { fetchComment } from './commentsApi.js';

const countComments = (list) => list.length;
const commentCountDisplay = async (commentId, commentsNumber) => {
  const comments = await fetchComment(commentId);
  if (countComments(comments)) commentsNumber.innerHTML = `Comments(${countComments(comments)})`;
  return comments;
};

export { commentCountDisplay, countComments };
