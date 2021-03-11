import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import store from './redux/Store';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';

const renderer = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <App />
          </Provider>
        </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderer();

store.subscribe(renderer);
