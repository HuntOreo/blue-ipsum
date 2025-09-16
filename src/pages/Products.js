import { createEl, appendEl } from '../helper';

const Products = function () {
  const container = createEl({ tag: 'container' });
  container.classList.add('products');

  return container;
}

export default Products;