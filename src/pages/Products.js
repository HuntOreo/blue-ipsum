import { createEl, appendEl } from '../helper';
import Pitch from './products/Pitch';
import Plans from './products/Plans';
import CallToAction from './products/CallToAction';

const Products = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('products');

  const elements = [Pitch(), Plans(), CallToAction()];
  appendEl(container, elements);
  return container;
}

export default Products;