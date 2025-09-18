import { createEl, appendEl } from '../../helper';
import Tile from './pitch/Tile';

const Pitch = function () {
  const container = createEl({ classAttr: ['pitch'] });
  const textWrapper = createEl({ tag: 'wrapper' });
  const headerTwo = createEl({ tag: 'h2', content: "We've helped innovative companies" });
  const desc = createEl({ tag: 'p', content: 'Nulla nibh neque, fringilla in ligula sit amet, auctor efficitur risus. Donec iaculis porttitor risus, nec tempor sapien dapibus bibendum.', classAttr: ['desc'] });
  const points = createEl({ classAttr: ['points'] });

  const tiles = [
    Tile('24%', 'Revenue business'),
    Tile('180k', 'In annual revenue'),
    Tile('10+', 'Months of runway'),
  ]

  const textWrapperContent = [headerTwo, desc];
  appendEl(textWrapper, textWrapperContent);

  const elements = [textWrapper, points];

  appendEl(points, tiles);
  appendEl(container, elements);
  return container;
}

export default Pitch;