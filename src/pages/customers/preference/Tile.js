import { createEl, appendEl } from '../../../helper';

class Tile {
  constructor({ header, name, desc }, special) {
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

    if (special) {
      const wrapper = createEl({ tag: 'wrapper' });
      const elements = [this._header, this._desc];

      appendEl(wrapper, elements);
      appendEl(this._element, wrapper);
    }
  }

  get element() {
    return this._element;
  }
}

export default Tile;