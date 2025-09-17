import './style.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/customers.css'
import Header from './parts/Header.js';
import Home from './pages/Home.js';
import Footer from './parts/Footer.js';
import { appendEl } from './helper.js';

const app = document.querySelector('#app');

const elements = [
  Header(),
  Home(),
  Footer(),
];

appendEl(app, elements);