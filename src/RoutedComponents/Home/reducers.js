
const initialState = "";

// Now this file just provides a mapping override to dynamic routes
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SEARCH':
      console.log('REDUCING SEARCHING');
      const searched = action.payload.searched;
      console.log(searched);
      return searched;
    default:
      return state;
  }
};
