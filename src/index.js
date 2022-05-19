import './index.css';
import displayShows from './modules/displayShow.js';
import getshow from './modules/getShows.js';
import commentsPopUp from './modules/showPop.js';
import addLike from './modules/addLike.js';

window.addEventListener('DOMContentLoaded', () => {
  displayShows();
  const showPopUp = async () => {
    const data = await getshow();
    commentsPopUp(data);
  };
  showPopUp();
  addLike();
});
