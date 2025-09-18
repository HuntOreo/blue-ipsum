import { createEl, appendEl } from '../../helper';
import Button from '../../parts/Button';
import arrowIcon from './img/arrow_outward-white.svg';

const CallToAction = function () {
  const container = createEl({ classAttr: ['callToAction'] });
  const childContainer = createEl({ 'tag': 'container' })

  const contentContainer = createEl({ tag: 'container' });
  const header = createEl({
    tag: 'h2',
    content: 'Ready to level up your payment process?'
  });
  const p = createEl({
    tag: 'p',
    classAttr: ['desc'],
    content: 'usce sit amet volutpat lectus, sit amet imperdiet nisl. Nam efficitur ante quis nunc dictum molestie. ',
  })

  const content = [header, p];
  appendEl(contentContainer, content);

  const btnsContainer = createEl({ tag: 'container' })
  const btnsWrapper = createEl({ tag: 'wrapper' });
  const createAcntBtn = new Button({
    content: 'Get started now',
    color: '#2A8E9E',
  });
  const linkBtn = new Button({
    content: 'Learn More',
    color: '#013347'
  });
  const icon = createEl({ tag: 'img', 'classAttr': ['icon'] });
  icon.src = arrowIcon;

  appendEl(linkBtn.element, icon);

  const buttons = [createAcntBtn.element, linkBtn.element];
  appendEl(btnsWrapper, buttons);
  appendEl(btnsContainer, btnsWrapper);

  const elements = [contentContainer, btnsContainer];
  appendEl(childContainer, elements);
  appendEl(container, childContainer);
  return container;
}

export default CallToAction;