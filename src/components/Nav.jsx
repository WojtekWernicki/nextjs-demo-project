import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="flex mx-auto bg-orange-500 text-white">
      <div className="xl:container xl:mx-auto p-3">
        <Link href="/">
          <a>HOME</a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
