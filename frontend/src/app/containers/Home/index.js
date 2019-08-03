import { connect } from 'react-redux';
import { Component } from './component';

const mapStoreToProps = () => {};

// Externalize action creation, internalize mapping to component
const mapActionsToProps = dispatch => {};

// Redux-money maker,
// Wraps Component in a HOC whichs MAPS STORE TO PROPS
// Also MAPS ACTIONS TO PROPS in that HOC
const Connected = connect(
  mapStoreToProps,
  mapActionsToProps
)(Component);

export { Connected as Home };
