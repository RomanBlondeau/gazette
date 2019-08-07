import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.scss';
import axios from 'axios';
import config from './config/api';

const boot = ({ data = {} }) => {
  const store = configureStore(data);

  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );

  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
      render(
        <AppContainer>
          <NextRoot store={store} history={history} />
        </AppContainer>,
        document.getElementById('root')
      );
    });
  }
};

if (localStorage.getItem('user') !== null) {
  const id = JSON.parse(localStorage.getItem('user')).id;
  const token = JSON.parse(localStorage.getItem('user')).token;
  axios
    .get(`${config.user.getAllData}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(boot)
    .catch(e => {
      console.log(e);
      localStorage.removeItem('user');
      throw new Error('Cannot start the app, please try again');
    });
} else {
  boot({});
}
