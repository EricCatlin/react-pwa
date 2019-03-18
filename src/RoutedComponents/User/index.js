import React from 'react';
import { connect } from 'react-redux';


const User = () => (
  <div>
    <h3>{`User`}</h3>
   
  </div>
);
const mapStateToProps = ({ location }) => ({});
const Connected = connect(mapStateToProps)(User);

export { Connected as User };
