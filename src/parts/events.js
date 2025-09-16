import { appendEl } from '../helper.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from '../pages/Home.js';
import Products from '../pages/Products.js';
import Customers from '../pages/Customers.js'
const app = document.querySelector('#app');

const changePage = (event) => {
  app.textContent = '';
  const page = event.target.textContent;
  const elements = [Header(), Footer()];

  if (page === 'Home') {
    elements.splice(1, 0, Home());
    appendEl(app, elements);
  }

  if (page === 'Products') {
    elements.splice(1, 0, Products());
    appendEl(app, elements);
  }

  if (page === 'Customers') {
    elements.splice(1, 0, Customers());
    appendEl(app, elements);
  }
}

export {
  changePage
}