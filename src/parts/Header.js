import { createEl, appendEl } from '../helper';
import Button from './Button';
import { changePage } from './events';

const Header = function () {
  const header = createEl({ tag: 'header' });
  const logo = createEl({ tag: 'div', classAttr: 'logo', content: 'Logo' });
  const nav = createEl({ tag: 'nav' });
  const accountContainer = createEl({ tag: 'container' });
  accountContainer.classList.add('accountBtns');

  const navBtns = [
    new Button({ content: 'Home', event: changePage }).element,
    new Button({ content: 'Products', event: changePage }).element,
    new Button({ content: 'Contact', event: changePage }).element,
  ]

  const accountBtns = [
    new Button({ content: 'Login' }).element,
    new Button({ content: 'Sign up', color: '#2A8E9E' }).element,
  ]

  const elements = [
    logo, nav, accountContainer
  ]

  appendEl(nav, navBtns);
  appendEl(accountContainer, accountBtns);
  appendEl(header, elements);

  return header;
}

export default Header;