import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import page from './pageReducer';
import { persistentHomeFormReducer, impersistentHomeFormReducer } from './RoutedComponents/Home/reducers';
import { saveState } from './localSaveState';
import throttle from 'lodash/throttle';

const routesMap = {
  HOME: '/',
  USER: '/user'
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({
    page,
    location: reducer,
    persistentHomeFormReducer,
    impersistentHomeFormReducer
  });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(
    enhancer,
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  // throttledSaveState will save state only once per second if an action has occured during that second
  const throttledSaveState = throttle(
    () =>
      saveState({
        persistentHomeFormReducer: store.getState().persistentHomeFormReducer
      }),
    1000
  );
  store.subscribe(() => throttledSaveState());

  return { store };
}
