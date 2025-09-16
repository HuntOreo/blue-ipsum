import { createEl, appendEl } from '../../../helper';
import cardIcon from '../img/card-icon.svg';
import Tile from './bottomHalf/Tile';

const BottomHalf = function () {
  const container = createEl({ classAttr: 'half' });
  container.classList.add('bottom');

  const tiles = [
    {
      icon: cardIcon,
      header: {
        size: 'h3',
        content: 'Free transfers'
      },
      desc: 'Nam sed dolor sit amet mauris dignissim eleifend. Nullam rutrum sodales maximus. Nunc bibendum ipsum elm.'
    },
    {
      icon: cardIcon,
      header: {
        size: 'h3',
        content: 'Multiple account'
      },
      desc: 'Nam sed dolor sit amet mauris dignissim eleifend. Nullam rutrum sodales maximus. Nunc bibendum ipsum elm.'
    },
    {
      icon: cardIcon,
      header: {
        size: 'h3',
        content: 'Unmatched security'
      },
      desc: 'Nam sed dolor sit amet mauris dignissim eleifend. Nullam rutrum sodales maximus. Nunc bibendum ipsum elm.'
    },
  ]

  for (let tile of tiles) {
    const newTile = Tile(tile);
    appendEl(container, newTile);
  }

  return container;
}

export default BottomHalf;