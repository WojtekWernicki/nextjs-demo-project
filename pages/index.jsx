import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

import i18nFile from '../src/i18n/index.json';

function Home({ locale }) {
  return (
    <div className="container">
      <Head>
        <title>{i18nFile.title[locale]}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hrefLang={locale} />
      </Head>
      <Link href="/" locale={locale === 'pl' ? 'en-US' : 'pl'}>
        <a>{i18nFile.changeLang[locale]}</a>
      </Link>
    </div>
  );
}

Home.propTypes = {
  locale: PropTypes.string.isRequired
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale
    }
  };
}

export default Home;
