import { createEl, appendEl } from '../../../helper';

class Tile {
  constructor({ header, desc, number }) {
    this._element = createEl({ 'classAttr': ['tile'] });
    this._header = createEl({ tag: 'h3', content: header });
    this._desc = createEl({ tag: 'p', content: desc, classAttr: ['desc'] });
    this._number = createEl({ tag: 'span', content: number });

    const elements = [this._number, this._header, this._desc];
    appendEl(this._element, elements);
  }

  get element() { return this._element; }
}

export default Tile;