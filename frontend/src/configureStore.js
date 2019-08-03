import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import throttle from 'lodash/throttle';

import {
  loadState,
  saveState,
} from './persistedState';

import { routesMap } from './routesMap';
import { reducer as page } from './app/reducers/pageReducers';

const configureStore = async () => {
  
  // Get existing State from LocalStorage
  const loadedState = await loadState({ fileName: 'store' });

  // redux-first-router main connection point
  const { reducer: routeState, middleware, enhancer } = connectRoutes(routesMap, {
    basename: '/'
  });

  // final top-level store structure
  const rootReducer = combineReducers({
    page,
    location: routeState,
  });

  // apply redux middlewares
  const middlewares = applyMiddleware(middleware);

  // Attach redux dev-tools in non-prod envs
  const composeEnhancers =
    process.NODE_ENV !== 'production'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const enhancers = composeEnhancers(enhancer, middlewares);

  // Initialze actual redux store
  const store = createStore(rootReducer, loadedState, enhancers);

  // Setup periodic Save States (Google Docs style, saves every few seconds during activity)
  const throttledSaveState = throttle(() => {
    // !!!Important!!! //
    // Map store properties to be saved!
    const { /* destructure whole reducers */ } = store.getState();
    return saveState({
      fileName: 'state',
      state: {
        // save them. They will be restored upon load
      }
    });
  }, 2000);

  store.subscribe(() => throttledSaveState());
 
  console.log('Store Initialized');
  return { store };
};

export { configureStore };
