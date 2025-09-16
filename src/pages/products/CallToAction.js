import { createEl, appendEl } from '../../helper';
import Button from '../../parts/Button';

const CallToAction = function () {
  const container = createEl({ classAttr: ['callToAction'] });
  const contentWrapper = createEl({ tag: 'wrapper' });
  const header = createEl({
    tag: 'h2',
    content: 'Ready to level up your payment process?'
  });
  const p = createEl({
    tag: 'p',
    classAttr: ['desc'],
    content: 'usce sit amet volutpat lectus, sit amet imperdiet nisl. Nam efficitur ante quis nunc dictum molestie. ',
  })
  const btnsWrapper = createEl({ tag: 'wrapper' });
  const createAcntBtn = new Button({
    content: 'Get started now',
    color: '#2A8E9E',
  });
  const linkBtn = new Button({
    content: 'Learn More',
    color: '#013347'
  });

  const content = [header, p];
  appendEl(contentWrapper, content);
  const buttons = [createAcntBtn.element, linkBtn.element];
  appendEl(btnsWrapper, buttons);
  const elements = [header, contentWrapper, btnsWrapper];
  appendEl(container, elements);

  return container;
}

export default CallToAction;