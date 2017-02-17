
import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';
import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import { AppContainer } from 'react-hot-loader';
import { browserHistory, match, Router } from 'react-router';
import AppRoutes from 'routes';

const data = JSON.parse(decodeURIComponent(document.getElementById('preloadedData').textContent));

const environment = new Relay.Environment();
const networkLayer = new Relay.DefaultNetworkLayer('/graphql');

environment.injectNetworkLayer(networkLayer);

IsomorphicRelay.injectPreparedData(environment, data);

const root = document.querySelector('#main');

const mount = (routes = AppRoutes) => {
  match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
    IsomorphicRouter.prepareInitialRender(environment, renderProps).then((props) => {
      render(
        <AppContainer>
          <Router {...props} />
        </AppContainer>,
        root
      );
    });
  });
};

mount();

if (module.hot) {
  // Rerender after any changes to the following.
  module.hot.accept('../routes', () => {
    const newRoutes = require('../routes').default; // eslint-disable-line global-require

    mount(newRoutes);
  });
}
