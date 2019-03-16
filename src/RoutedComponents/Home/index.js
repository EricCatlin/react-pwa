import React from 'react';
import {Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Home = ({ searched, search }) => (
  <div>
    <h3>Home screen demonsrating saving state locally, persisting refreshes</h3>
    <br />
    <Input placeholder="Search..." value={searched} onChange={search} />
  </div>
);

const mapStateToProps = ({searched}) => ({searched});
function mapDispatchToProps(dispatch) {
  return {
    search: ev => {
      console.log(ev.target.value);
      return dispatch({
        type: 'SEARCH',
        payload: { searched: ev.target.value }
      });
    }
  };
}
const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export { Connected as Home };
