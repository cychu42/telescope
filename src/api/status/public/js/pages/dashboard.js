import getPostsCount from '../post/index.js';
import getFeedCount from '../feed/index.js';
import getGitHubData from '../github-stats.js';
import getAllServicesStatus from '../serviceStatus.js';

window.addEventListener('load', () => {
  getGitHubData('Seneca-CDOT', 'telescope');
  getGitHubData('Seneca-CDOT', 'satellite');
  getFeedCount();
  getPostsCount();
  getAllServicesStatus();
});
