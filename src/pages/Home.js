import { createEl, appendEl } from '../helper.js';


import Landing from './Home/Landing';
import Card from './Home/Card';

const Home = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('home');
  const elements = [Landing(), Card()]

  appendEl(container, elements);
  return container;
}

export default Home;