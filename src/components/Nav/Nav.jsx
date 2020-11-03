import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Lang from './Lang';

function Nav({ locale }) {
  return (
    <nav className="flex mx-auto bg-orange-500 text-white w-full flex-shrink-0">
      <div className="container mx-auto flex flex-row justify-between items-center p-3">
        <Link href="/">
          <a>WIEWIÓR DEV</a>
        </Link>
        <div>
          <Link href="/ssr"><a className="mr-10">SSR BLOG</a></Link>
          <Link href="/blog"><a className="mr-10">BLOG</a></Link>
          <Lang locale={locale} />
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Nav;
