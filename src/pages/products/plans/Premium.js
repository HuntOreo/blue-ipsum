import { createEl, appendEl } from '../../../helper';
import arrowIcon from '../img/arrow_outward-white.svg';

const Premium = function () {
  const container = createEl({ classAttr: ['premium', 'card'] });
  const header = createEl({ tag: 'h2', content: 'Premium' });
  const wrapper = createEl({ tag: 'wrapper' });
  const price = createEl({ tag: 'p', content: '$6.99/month' });
  const icon = createEl({ tag: 'img', classAttr: ['icon'] });
  icon.src = arrowIcon;

  const wrapperEl = [price, icon];
  appendEl(wrapper, wrapperEl);
  const elements = [header, wrapper];
  appendEl(container, elements);
  return container;
}

export default Premium;