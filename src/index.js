import './style.css';
import './styles/home.css';
import Header from './parts/Header.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Customers from './pages/Customers.js';
import Footer from './parts/Footer.js';
import { appendEl } from './helper.js';

const app = document.querySelector('#app');

const elements = [
  Header(),
  Home(),
  Products(),
  Customers(),
  Footer(),
];

appendEl(app, elements);