import { appendEl, createEl } from '../helper';
import Preference from './customers/Preference';
import Steps from './customers/Steps';

const Customers = function () {
  const container = createEl({ classAttr: ['container', 'customers'] });

  const elements = [Preference(), Steps()];
  appendEl(container, elements);
  return container;
}

export default Customers;