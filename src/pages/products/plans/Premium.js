import { createEl, appendEl } from '../../../helper';
import arrowIcon from '../img/arrow_outward.svg';

const Premium = function () {
  const container = createEl({ classAttr: ['premium', 'card'] });
  const header = createEl({ tag: 'h2', content: 'Premium' });
  const price = createEl({ tag: 'p', content: '$6.99/month' });
  const icon = createEl({ tag: 'img', classAttr: ['icon'] });
  icon.src = arrowIcon;

  const elements = [header, price, icon]
  appendEl(container, elements);
  return container;
}

export default Premium;