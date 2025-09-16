import { createEl, appendEl } from '../helper';

const Footer = function () {
  const container = createEl({ tag: 'footer' });
  const content = createEl({ tag: 'p', content: '©' + `Hunter Finance` });

  appendEl(container, content);
  return container;
}

export default Footer;