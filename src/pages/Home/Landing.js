import createEl from '../../helpers/createEl';
import appendEl from '../../helpers/appendEl';
import Cards from './landing/Cards';
import Title from './landing/Title';

const Landing = function () {
  const container = createEl({ tag: 'container' });
  const elements = [Title(), Cards()];

  container.classList.add('landing');
  appendEl(container, elements);
  return container;
}

export default Landing;