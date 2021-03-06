import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import i18nFile from '../../i18n/nav.json';

function Lang({ locale }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleLangOpen = useCallback(() => { setIsOpen(!isOpen); }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={handleLangOpen}
          >
            {i18nFile.language[locale]}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      </div>
      <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className="rounded-md bg-white shadow-xs">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              href={{
                pathname: router.pathname,
                query: router.query
              }}
              locale="en-US"
            >
              <a
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
                onClick={handleLangOpen}
              >
                English
              </a>
            </Link>
            <Link
              href={{
                pathname: router.pathname,
                query: router.query
              }}
              locale="pl"
            >
              <a
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
                onClick={handleLangOpen}
              >
                Polski
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Lang.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Lang;
