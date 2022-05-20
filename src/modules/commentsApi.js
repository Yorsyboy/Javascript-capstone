const appId = 'cjvODzXExy4r23UR9owN/';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const endPoint = 'comments';
// get comment
const fetchComment = async (showId) => {
  const res = await fetch(`${commentUrl + appId + endPoint}?item_id=${showId}`)
    .then((response) => {
      if (!response.ok) return [];

      return response.json();
    })
    .catch((error) => error.message);

  return res;
};

// Add comment
const addMovieComment = async (viewerInfo) => {
  const response = await fetch(`${commentUrl + appId + endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(viewerInfo),
  });
  const commentData = await response.text();
  return commentData;
};

export { addMovieComment, fetchComment };