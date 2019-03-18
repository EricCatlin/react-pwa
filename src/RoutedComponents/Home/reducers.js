const initialState = { savableForm: '', inverted: null };

const persistentHomeFormReducer = (
  state = Object.assign({}, initialState),
  action = {}
) => {
  switch (action.type) {
    case 'PERSISTENT_HOME_FORM_CHANGED':
      return Object.assign({}, state, action.payload);
    case 'PERSISTENT_HOME_FORM_RESET':
      return Object.assign({}, initialState);

    default:
      return state;
  }
};

const impersistentHomeFormReducer = (
  state = Object.assign({}, initialState),
  action = {}
) => {
  switch (action.type) {
    case 'IMPERSISTENT_HOME_FORM_CHANGED':
      const { payload } = action;
      const newState = Object.assign({}, state, payload);
      return newState;
    default:
      return state;
  }
};
// Now this file just provides a mapping override to dynamic routes
export { persistentHomeFormReducer, impersistentHomeFormReducer };
