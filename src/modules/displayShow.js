import getshow from './getShows.js';

const allShows = document.querySelector('.allShows');
allShows.innerHTML = '';

const showTemplate = (Shows) => {
  Shows.forEach((show) => {
    const showInfo = document.createElement('li');
    showInfo.className = 'd-flex show';
    showInfo.id = show.id;
    showInfo.innerHTML = `
        <img id="show-img" src=${show.image.medium} alt="show image">
        <div id="like-show">
            <h2 id="show-title">${show.name}</h2>
            <i class="far fa-heart" id="like-icon"></i>
        </div>
        <div class="d-flex like">
        <p id="likes">0 likes</p>
   
        <button type="button" id="${showInfo.id}" class="comment-btn"  onclick"commentsPopUp(${showInfo.id})" role="button">Comments</button
        </div>`;
    allShows.appendChild(showInfo);
  });
};

const displayShows = async () => {
  const fetchedShows = await getshow();
  const Shows = fetchedShows.slice(0, 20);
  showTemplate(Shows);
};

export default displayShows;
