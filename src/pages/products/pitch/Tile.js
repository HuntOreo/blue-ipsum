import { createEl, appendEl } from '../../../helper';

const Tile = function (main, desc) {
  const container = createEl({ classAttr: ['point'] });
  const header = createEl({ tag: 'h1', content: main });
  const p = createEl({ tag: 'p', content: desc })

  const elements = [header, p];
  appendEl(container, elements);
  return container;
}
export default Tile;