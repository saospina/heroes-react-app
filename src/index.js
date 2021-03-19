import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';
import { HeroesApp } from './HeroesApp';


ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
);


