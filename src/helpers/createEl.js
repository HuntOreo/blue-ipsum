const createEl = function ({ tag, content, classAttr }) {

  if (tag && !content && !classAttr) {
    if (tag == 'container') {
      const element = document.createElement('div');
      element.classList.add('container');
      return element;
    }

    if (tag == 'wrapper') {
      const element = document.createElement('div');
      element.classList.add('wrapper');
      return element;
    }
  }

  const element = document.createElement(tag);

  if (content) element.textContent = content;
  if (classAttr) element.classList.add(classAttr);

  return element;
}

export default createEl;