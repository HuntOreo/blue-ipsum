import { createEl } from '../helper';

class Button {
  constructor({ content, color, event }) {
    this._element = createEl({ tag: 'button', content });
    this._content = content;
    this._color = color;
    this._element.style.backgroundColor = color;
    this._element.textContent = content;

    if (event) {
      this._event = event;
      this._element.addEventListener(event.type, (e) => event.func(e));
    }
  }

  set content(content) { this._content = content; }
  set color(color) {
    this._color = color;
    this._element.style.backgroundColor = color;
  }
  set event(event) { this._event = event; }

  get element() { return this._element; }
  get content() { return this._content; }
  get color() { return this._color; }
  get event() { return this._event; }

  set padding(dimensions) { this._element.style.padding = dimensions; }

  addClass(name) {
    this._element.classList.add(name);
  }
}

export default Button;