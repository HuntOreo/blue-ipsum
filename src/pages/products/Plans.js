import { createEl, appendEl } from '../../helper';
import Plus from './plans/Plus';
import Premium from './plans/Premium';

const Plans = function () {
  const container = createEl({ classAttr: ['plans'] });

  const elements = [Plus(), Premium()];
  appendEl(container, elements);
  return container;
}

export default Plans;