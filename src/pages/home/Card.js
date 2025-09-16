import { createEl, appendEl } from '../../helper.js';

import BottomHalf from './card/BottomHalf';
import TopHalf from './card/TopHalf';

const Card = function () {
  const container = createEl({ classAttr: 'pitch' });
  const elements = [TopHalf(), BottomHalf()];

  appendEl(container, elements)
  return container;
}

export default Card;