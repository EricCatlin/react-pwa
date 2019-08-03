import { NOT_FOUND } from 'redux-first-router';

// Component Names must match components defined in app/index.js's components[]
const components = {
  HOME: 'Home',
  [NOT_FOUND]: 'NotFound',
};
const reducer = (state = components['HOME'], action = {}) => {
  return components[action.type] || state;
};

export { reducer };
