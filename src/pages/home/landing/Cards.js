import { createEl, appendEl } from '../../../helper.js';

const Cards = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('cards');

  const backgroundBox = createEl({ classAttr: ['background'] });
  const foregroundBox = createEl({ classAttr: ['foreground'] });

  const elements = [backgroundBox, foregroundBox];

  appendEl(container, elements);
  return container;
}

export default Cards;