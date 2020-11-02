import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';

import '../styles/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { locale } = pageProps;

  return (
    <div className="min-h-screen flex flex-col">
      <Nav locale={locale} />
      <main className="flex flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
