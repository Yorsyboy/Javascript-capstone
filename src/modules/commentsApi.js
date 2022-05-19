const appId = 'f5fDagMARo6BC6LKqLaP/';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const endPoint = 'comments';
// get comment
const fetchComment = async (showId) => {
  const response = await fetch(`${commentUrl + appId + endPoint}?item_id=${showId}`).catch((err) => err);
  const commentData = response.json();
  return (commentData);
};
// Add comment
const addMovieComment = async (viewerInfo) => {
  fetch(`${commentUrl + appId + endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(viewerInfo),
  });
};

export { addMovieComment, fetchComment };