const loadState = () => {
  try {
    console.log('Loading State from Local Storage');
    const serializedState = localStorage.getItem('state');
    console.log(serializedState);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    console.log('Saving State:');
    console.log(state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export { loadState, saveState };
