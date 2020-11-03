import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';

import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';

import '../styles/tailwind.css';
import '../styles/globals.css';
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }) {
  const { locale } = pageProps;
  const router = useRouter();

  NProgress.configure({ minimum: 0.1, parent: '#wrapper' });

  const startProgress = () => {
    NProgress.start();
  };

  const finishProgress = () => {
    NProgress.done();
  };

  useEffect(() => {
    router.events.on('routeChangeStart', startProgress);
    router.events.on('routeChangeComplete', finishProgress);

    return () => {
      router.events.off('routeChangeComplete', finishProgress);
      router.events.off('routeChangeStart', startProgress);
    };
  });

  return (
    <div className="min-h-screen flex flex-col" id="wrapper">
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
