import appendEl from '../../../helpers/appendEl';
import createEl from '../../../helpers/createEl'

const Cards = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('cards');

  const backgroundBox = createEl({ tag: 'div', classAttr: 'background' });
  const foregroundBox = createEl({ tag: 'div', classAttr: 'foreground' });

  const elements = [backgroundBox, foregroundBox];

  appendEl(container, elements);
  return container;
}

export default Cards;