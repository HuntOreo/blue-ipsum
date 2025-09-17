import { createEl, appendEl } from '../../../helper';
import arrow from '../img/white_arrow_outward.svg';
import Logos from './title/Logos';

const Title = function () {
  const desc = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed vulputate leo.
  `;
  const title = `
    Get paid early save automatically all your pay.
  `;

  const container = createEl({ tag: 'container' });
  const headerOne = createEl({ tag: 'h1', content: title });
  const wrapper = createEl({ tag: 'wrapper' });
  const p = createEl({ tag: 'p', content: desc });
  const callToActionContainer =
    createEl({ tag: 'div', classAttr: ['callToAction'] });
  const input = createEl({ tag: 'input' });
  input.setAttribute('placeholder', 'Your email');
  const submit = createEl({ tag: 'button', content: 'Get Started' });
  const icon = createEl({ tag: 'img' });
  icon.src = arrow;

  appendEl(submit, icon);

  const callToActionElements = [input, submit]
  const wrapperElem = [p, callToActionContainer, Logos()]
  const finalElements = [headerOne, wrapper];

  appendEl(container, headerOne);
  appendEl(callToActionContainer, callToActionElements)
  appendEl(wrapper, wrapperElem);
  appendEl(container, finalElements);

  container.classList.add('title');
  return container;
}

export default Title;