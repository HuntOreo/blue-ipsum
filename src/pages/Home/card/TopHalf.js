import appendEl from '../../../helpers/appendEl';
import createEl from '../../../helpers/createEl';

const TopHalf = function () {
  const container = createEl({ classAttr: 'half' });
  container.classList.add('top');
  const header = createEl({
    tag: 'h2',
    'content': 'Experience that grows with your scale.'
  });
  const desc = createEl({
    tag: 'p',
    content: 'Design a financial operating system that works for your buisness and streamlined cash flow management.'
  })

  const elements = [header, desc];
  appendEl(container, elements);
  return container;
}

export default TopHalf;