import { createEl, appendEl } from '../helper.js';

import Landing from './home/Landing.js';
import Card from './home/Card.js';

const Home = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('home');
  const elements = [Landing(), Card()]

  appendEl(container, elements);
  return container;
}

export default Home;