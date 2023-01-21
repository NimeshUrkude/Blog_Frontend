import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App.jsx";
import {BrowserRouter} from "react-router-dom";
import env from "react-dotenv";
import { Provider } from 'react-redux';
import store from "./components/redux/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);