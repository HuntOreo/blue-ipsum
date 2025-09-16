import appendEl from '../../helpers/appendEl';
import createEl from '../../helpers/createEl';
import forbes from '../img/forbes.svg';
import microsoft from '../img/microsoft.svg';
import tinder from '../img/tinder.svg';

const Logos = function () {
  const container = createEl({ tag: 'div', classAttr: 'compLogos' });
  const forbesImg = createEl({ tag: 'img', classAttr: 'customerLogo' });
  const microsoftImg = createEl({ tag: 'img', classAttr: 'customerLogo' });
  const tinderImg = createEl({ tag: 'img', classAttr: 'customerLogo' });

  forbesImg.src = forbes;
  microsoftImg.src = microsoft;
  tinderImg.src = tinder;

  const imgs = [
    forbesImg,
    microsoftImg,
    tinderImg
  ]

  appendEl(container, imgs);
  return container;
}

export default Logos;