import appendEl from '../../../helpers/appendEl';
import createEl from '../../../helpers/createEl';

const BottomHalf = function () {
  const container = createEl({ classAttr: 'half' });
  container.classList.add('bottom');

  return container;
}

export default BottomHalf;