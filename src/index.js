import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloProvider } from 'react-apollo'
import client from './client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <ApolloProvider client={client} store="store">
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
