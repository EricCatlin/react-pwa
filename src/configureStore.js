import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import page from './pageReducer';
import homeReducer from './RoutedComponents/Home/reducers';
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
    searched: homeReducer
  });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(
    enhancer,
    middlewares
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  // throttledSaveState will save state only once per second if an action has occured during that second
  const throttledSaveState = throttle( ()=> 
    saveState({
      ...store.getState()
    }),
    1000
  );
  store.subscribe(()=>throttledSaveState());
  

  return { store };
}
