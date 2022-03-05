import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header'
import Services from './services/services'
import Contact from './contact/contact'
import Home from './home/home'


ReactDOM.render(
  <React.StrictMode>
  <Header />
  <Home />
  <Services />
  <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


