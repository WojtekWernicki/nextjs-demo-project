import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../src/components/Nav';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
