import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { configureStore } from './configureStore';
import { setBasePath } from './configureAxios';
import { App } from './app';

setBasePath('/');

// Page does not render UNTIL configureStore completes. 
// Possible future performance bottleneck for first render.
// TO solve: Research late applying the redux store
configureStore().then(({ store }) => {
  // React Bootstrapper: Injects and maintains App into element <div id="root" />
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  // Activate service worker when eligable
  serviceWorker.register();
});


