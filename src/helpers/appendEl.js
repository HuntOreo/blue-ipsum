const appendEl = function (parent, elements) {
  if (elements[1]) {
    for (let element of elements) {
      parent.append(element);
    }
  } else {
    parent.append(elements);
  }
}

export default appendEl;