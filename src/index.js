import './style.css';
import './styles/home.css';
import Header from './Header.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import { appendEl } from './helper.js';

const app = document.querySelector('#app');

const elements = [
  Header(),
  // Home(),
  Products()
];

appendEl(app, elements);