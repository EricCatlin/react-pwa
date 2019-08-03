import { combineReducers } from 'redux';
import localforage from 'localforage';

const reducers = {

};

const loadState = async ({ fileName }) => {
  console.log('State Loading');
  try {
    const serializedState = await localforage.getItem(fileName);
    if (serializedState === null) {
      console.log('State Not Found');
      return undefined;
    }
    console.log('State Loaded');
    const parsedState = JSON.parse(serializedState);
    return parsedState;
  } catch (error) {
    console.error(error);
  }
};

const saveState = async ({ state, fileName }) => {
  try {
    console.log('State Saving');
    const serializedState = JSON.stringify(state);
    localforage.setItem(fileName, serializedState);
  } catch (error) {
    console.error(error);
  }
};

const destroyState = ({ fileName }) => {
  try {
    console.log('Destroying State');
    localforage.removeItem(fileName);
  } catch (error) {
    console.error(error);
  }
};

const persistedStateSuperReducer = combineReducers(reducers);

export { loadState, saveState, persistedStateSuperReducer, destroyState };
