import React from 'react';
import { connect } from 'react-redux';

import coffeeImage from './coffee_beans.jpg';

const User = () => (
  <div>
    <h3>{`User`}</h3>
    <img alt="coffee" style={{ maxWidth: '300px' }} src={coffeeImage} />
  </div>
);
const mapStateToProps = ({ location }) => ({});
const Connected = connect(mapStateToProps)(User);

export { Connected as User };
