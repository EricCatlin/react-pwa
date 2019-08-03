const actions = dispatch => ({
  Navigate: (destination, payload) =>
    dispatch({
      type: destination,
      payload
    }),
});

export { actions };
