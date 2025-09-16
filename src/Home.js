import createEl from './helpers/createEl'
import appendEl from './helpers/appendEl';
import Title from './Home/Title';
import Cards from './Home/Cards';

const Home = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('home');
  const elements = [
    Title(),
    Cards()
  ]

  appendEl(container, elements);

  return container;
}

export default Home;