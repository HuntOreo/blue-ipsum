import { createEl, appendEl } from '../helper';
import Pitch from './Products/Pitch';
import Plans from './Products/Plans';
import CallToAction from './Products/CallToAction';

const Products = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('products');

  const elements = [Pitch(), Plans(), CallToAction()];
  appendEl(container, elements);
  return container;
}

export default Products;