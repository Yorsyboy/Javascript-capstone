const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'QALIoXYe7LSsEgG2FYGA';

const getLikesData = async () => {
  let data = await fetch(`${baseUrl}${appId}/likes`);
  data = await data.json();
  return data;
};

const postLikes = async (showId, element) => {
  await fetch(`${baseUrl}${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: showId,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const likesArray = await getLikesData();
  likesArray.map((a) => {
    if (a.item_id === showId) {
      element.innerHTML = `${a.likes} Likes
      <button type="button" id="${showId}" class="comment-btn"  onclick"commentsPopUp(${showId})" role="button">Comments</button>`;
    }
    return a;
  });
};

export { postLikes, getLikesData };