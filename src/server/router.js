import React from 'react';
import { renderToString } from 'react-dom/server';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-layer';
import IsomorphicRouter from 'isomorphic-relay-router';
import match from 'react-router/lib/match';
import { IntlProvider } from 'react-intl';
import template from './template';
import routes from '../routes';

const errorHandler = (error) => {
  // `fetchWithRetries` errors includes the response body
  // https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/fetch/fetchWithRetries.js#L93
  const isfetchWithRetriesError =
    !!error.response &&
    error.response.constructor.name === 'Body';

  // Include GQL's error response in addition
  // to the generic `fetchWithRetries` message
  if (isfetchWithRetriesError) {
    return error.response.text().then((payload) => {
      throw new Error(
        `${error.message} \n` +
        `Status Code: ${error.response.status} ${error.response.statusText} \n` +
        `Request URL: ${error.response.url} \n` +
        `Request Payload: \n` +
        `${payload} \n`
      );
    });
  }

  // Rethrow any errors that are not caused by `fetchWithRetries`
  throw error;
};

export default ({
  gqlUrl,
  gqlBatchUrl,
  jsBundle,
  cssBundle,
}) => {
  const networkLayer = new RelayNetworkLayer([
    urlMiddleware({
      url: gqlUrl,
      batchUrl: gqlBatchUrl,
    }),
  ], { disableBatchQuery: false });

  return (req, res, next) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      } else if (redirectLocation) {
        return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
      } else if (!renderProps) {
        return res.status(404).send('Not Found');
      }

      IsomorphicRouter
        .prepareData(renderProps, networkLayer)
        .then(({ data, props }) => {
          const root = renderToString((
            <IntlProvider locale="en">
              {IsomorphicRouter.render(props)}
            </IntlProvider>
          ));

          res.status(200);
          res.send(template({
            root,
            jsBundle,
            cssBundle,
            data,
          }));
        })
        .catch(errorHandler)
        .catch(next);
      return null;
    });
  };
};
