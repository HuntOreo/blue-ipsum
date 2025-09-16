import './style.css';
import './styles/home.css';
import Header from './Header.js';
import Home from './pages/Home.js';
import appendEl from './helpers/appendEl.js';

const app = document.querySelector('#app');

const elements = [
  Header(),
  Home()
];

appendEl(app, elements);