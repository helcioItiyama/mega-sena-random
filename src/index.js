import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyle from './styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
