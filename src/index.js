import './style.css';
import Header from './Header.js';
import Home from './Home.js';
import appendEl from './helpers/appendEl.js';

const app = document.querySelector('#app');

const elements = [
  Header(),
  Home()
]

appendEl(app, elements);