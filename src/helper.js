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

  if (!tag && !content && classAttr) {
    const element = document.createElement('div');
    for (let name of classAttr) {
      element.classList.add(name);
    }
    return element;
  }

  const element = document.createElement(tag);

  if (content) element.textContent = content;
  if (classAttr) {
    for (let name of classAttr) {
      element.classList.add(name);
    }
  };

  return element;
}

const appendEl = function (parent, elements) {
  if (elements[1]) {
    for (let element of elements) {
      parent.append(element);
    }
  } else {
    parent.append(elements);
  }
}

export {
  createEl,
  appendEl
}