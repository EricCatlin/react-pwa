import React from 'react';
import { connect } from 'react-redux';

import { NotFound, NavBar, Footer } from './components';
import { User, Home } from './RoutedComponents';

import { Container } from 'semantic-ui-react';



const components = { NotFound, User, Home };

const App = ({ page }) => {
  const Component = components[page];

  return (
    <div>
      <NavBar />
      <Container text style={{ marginTop: '7em', minHeight: '90vh' }}>
        <Component />
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ page }) => ({ page });

const Connected = connect(mapStateToProps)(App);

export { Connected as App };
