import { createEl, appendEl } from '../../../helper';

class Tile {
  constructor({ header, desc, number }) {
    this._element = createEl({ 'classAttr': ['tile'] });
    const contentWrapper = createEl({ tag: 'wrapper' });
    const numWrapper = createEl({ 'tag': 'wrapper' });
    const block = createEl({ classAttr: ['numBlock'] });
    this._number = createEl({ tag: 'span', content: number, classAttr: ['number'] });
    this._header = createEl({ tag: 'h4', content: header });
    this._desc = createEl({ tag: 'p', content: desc, classAttr: ['desc'] });

    const numWrapperElem = [block, this._number]
    appendEl(numWrapper, numWrapperElem);
    const contentWrapperElem = [this._header, this._desc];
    appendEl(contentWrapper, contentWrapperElem);
    const elements = [numWrapper, contentWrapper];
    appendEl(this._element, elements);
  }

  get element() { return this._element; }
}

export default Tile;