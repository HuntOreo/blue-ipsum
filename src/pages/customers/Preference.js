import { createEl, appendEl } from '../../helper';
import Tile from './preference/Tile';

const Preference = function () {
  const container = createEl({ 'classAttr': ['preferences'] });
  const header = createEl({ tag: 'h2', content: 'Why they prefer Finpay' });
  const tilesContainer = createEl({ classAttr: ['tiles'] });

  const runningTile = new Tile({
    header: 'Business already running on Finpay',
    name: 'running',
  }).element;
  const runningTag = createEl({ tag: 'h1', content: '3k+', classAttr: ['tag'] });
  appendEl(runningTile, runningTag);

  const withdrawTile = new Tile({
    header: 'Instant withdraw your funds at any time',
    name: 'withdraw',
  }).element;
  const withdrawTag = createEl({ classAttr: ['tag'] });
  appendEl(withdrawTile, withdrawTag);

  const volatilityTile = new Tile({
    header: 'No asset volatility',
    name: 'volatility',
    desc: 'Ut turpis odio, commodo sed posuere eu, euismod at magna. Cras sit amet pretium nulla.'
  }).element;
  const volatilityTag = createEl({ classAttr: ['tag'] });
  appendEl(volatilityTile, volatilityTag);

  const tiles = [runningTile, withdrawTile, volatilityTile];
  appendEl(tilesContainer, tiles);
  const elements = [header, tilesContainer];
  appendEl(container, elements);
  return container;
}

export default Preference;