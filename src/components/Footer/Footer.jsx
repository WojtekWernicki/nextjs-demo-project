import React from 'react';

function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-500 text-white text-center flex-shrink-0 p-3">
      &copy; {copyrightYear} Wojciech Wernicki. Powered by <a href="https://nextjs.org">Next.js</a>.
    </footer>
  );
}

export default Footer;
