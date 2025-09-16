import appendEl from '../../../../helpers/appendEl';
import createEl from '../../../../helpers/createEl';

const Tile = function ({ icon, header, desc }) {
  const container = createEl({ tag: 'container' });
  const iconImg = createEl({ tag: 'img', classAttr: 'icon' });
  iconImg.src = icon;
  const headerThree = createEl({ tag: header.size, content: header.content });
  const p = createEl({ tag: 'p', content: desc });

  const elements = [iconImg, headerThree, p];
  appendEl(container, elements);
  return container;
}

export default Tile;