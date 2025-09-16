import { createEl, appendEl } from '../../../helper';
import arrowIcon from '../img/arrow_outward.svg';

const Plus = function () {
  const container = createEl({ classAttr: ['plus', 'card'] });
  const header = createEl({ tag: 'h2', content: 'Plus' });
  const price = createEl({ tag: 'p', content: '$2.99/month' });
  const icon = createEl({ tag: 'img', classAttr: ['icon'] });
  icon.src = arrowIcon;

  const elements = [header, price, icon]
  appendEl(container, elements);
  return container;
}

export default Plus;