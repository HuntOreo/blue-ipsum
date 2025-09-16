import appendEl from '../../../helpers/appendEl';
import createEl from '../../../helpers/createEl'
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
    createEl({ tag: 'div', classAttr: 'callToAction' });
  const input = createEl({ tag: 'input' });
  const submit = createEl({ tag: 'button', content: 'submit' });

  const callToActionElements = [input, submit]
  const finalElements = [headerOne, wrapper, callToActionContainer, Logos()];

  appendEl(container, headerOne);
  appendEl(wrapper, p);
  appendEl(callToActionContainer, callToActionElements)
  appendEl(container, finalElements);

  container.classList.add('title');
  return container;
}

export default Title;