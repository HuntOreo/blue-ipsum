import { createEl, appendEl } from '../../helper';
import Tile from './steps/Tile';

const Steps = function () {
  const container = createEl({ 'classAttr': ['steps'] });
  const header = createEl({ tag: 'h2', content: 'Maximize your returns with a Reserve account that generates.' });
  const tilesContainer = createEl({ classAttr: ['tiles'] });

  const tiles = [
    new Tile({
      header: 'Open your account',
      desc: 'Vivamus tincidunt turpis sit amet leo vulputate, sit amet egestas nunc dignissim.',
      number: 1,
    }).element,
    new Tile({
      header: 'Transfer your money',
      desc: 'Mauris egestas erat quis ligula commodo, sit amet commodo purus pharetra.',
      number: 2,
    }).element,
    new Tile({
      header: 'Watch your balance grow',
      desc: 'Donec quam quam, semper eu commodo sit amet, efficitur tincidunt metus.',
      number: 3,
    }).element,
  ];

  appendEl(tilesContainer, tiles);
  const elements = [header, tilesContainer];
  appendEl(container, elements);
  return container;
}

export default Steps;