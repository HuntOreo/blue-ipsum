import { createEl, appendEl } from '../../../helper';

class Tile {
  constructor({ header, name, desc }) {
    this._element = createEl({ tag: 'div', classAttr: ['tile', name] });
    this._header = createEl({ tag: 'h3', content: header });
    appendEl(this._element, this._header);

    if (desc) {
      this._desc = createEl({
        tag: 'p',
        classAttr: ['desc'],
        content: desc,
      });

      appendEl(this._element, this._desc);
    };
  }

  get element() {
    return this._element;
  }
}

export default Tile;