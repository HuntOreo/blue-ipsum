import createEl from '../helpers/createEl'
import appendEl from '../helpers/appendEl';
import Landing from './Home/Landing';

const Home = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('home');
  const elements = Landing()

  appendEl(container, elements);
  return container;
}

export default Home;