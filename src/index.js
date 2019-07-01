import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';

import './index.css';
import Base from './containers/Base';


ReactDOM.render(
  <Base />,
  document.getElementById('root')
);
