import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import reportWebVitals from './reportWebVitals.js';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

axios.defaults.baseURL = 'https://ecommerce-backend-zq79.onrender.com/';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
      <App />
      </Auth0Provider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
