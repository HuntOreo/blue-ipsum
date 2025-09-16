import { createEl, appendEl } from './helper';

const Header = function () {
  const header = createEl({ tag: 'header' });
  const logo = createEl({ tag: 'div', classAttr: 'logo', content: 'Logo' });
  const nav = createEl({ tag: 'nav' });
  const accountContainer = createEl({ tag: 'container' });
  accountContainer.classList.add('accountBtns');

  const navBtns = [
    createEl({ tag: 'button', content: 'Home' }),
    createEl({ tag: 'button', content: 'Products' }),
    createEl({ tag: 'button', content: 'Contact' }),
    createEl({ tag: 'button', content: 'About' }),
  ]

  const accountBtns = [
    createEl({ tag: 'button', content: 'Log In' }),
    createEl({ tag: 'button', content: 'Sign Up' }),
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