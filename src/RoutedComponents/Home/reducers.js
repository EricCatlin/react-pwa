const initialState = { savableForm: '', inverted: null };

const persistentHomeFormReducer = (
  state = Object.assign({}, initialState),
  action = {}
) => {
  switch (action.type) {
    case 'PERSISTENT_HOME_FORM_CHANGED':
      const { payload } = action;
      console.log(payload);
      const newState = Object.assign({}, state, payload);
      return newState;
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
      console.log(payload);
      const newState = Object.assign({}, state, payload);
      return newState;
    default:
      return state;
  }
};
// Now this file just provides a mapping override to dynamic routes
export { persistentHomeFormReducer, impersistentHomeFormReducer };
