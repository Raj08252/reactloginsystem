import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ca4hisvvom6jy3b4.us.auth0.com"
    clientId="a1Co04IVilbrI7u4jVV0lPXf4PTUFWp1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
