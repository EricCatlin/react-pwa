import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NotFound } from './components';

// Routable components. Each component can be reached by a URL.
// URLs configured in configureStore routesMap
import * as containers from './containers';

const components = { NotFound, ...containers };

const propTypes = {
  page: PropTypes.string.isRequired
};
const Component = ({ page }) => {
  const Component = components[page];
  return (
    <section id="route-container" >
      <Component />
    </section>
  );
};

Component.propTypes = propTypes;

const mapStateToProps = ({ page }) => ({ page });

const Connected = connect(mapStateToProps)(Component);

export { Connected as App };
