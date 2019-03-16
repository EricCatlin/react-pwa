import React from 'react';
import { connect } from 'react-redux';

import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const Component = ({ Navigate }) => {
  return (
    <Menu fixed="top" >
      <Menu.Item as="a" header>
        {/* <Image size="tiny" src={logo} /> */}
        PWA POC
      </Menu.Item>
      <Menu.Item as="a" onClick={() => Navigate('HOME')}>
        Home
      </Menu.Item>

      <Dropdown item simple text="More">
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => Navigate('USER')}>
            My Account
          </Dropdown.Item>
          <Dropdown.Item>History</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Quick Links</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Lookup</span>
            <Dropdown.Menu>
              <Dropdown.Item>Lookup Items</Dropdown.Item>
              <Dropdown.Item>Lookup Locations</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Report Issue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Navigate: (type, payload) => {
      return dispatch({
        type,
        payload
      });
    }
  };
};

const Connected = connect(
  null,
  mapDispatchToProps
)(Component);

export { Connected };
