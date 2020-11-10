import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 flex justify-between px-4">
      <Link href="/">
        <a>
          <h1 className="text-2xl md:text-4xl font-black text-orange-400 tracking-wider">
            Tekkie
          </h1>
        </a>
      </Link>
      <ul className="flex items-center">
        <Link href="/">
          <a>
            <li className="mx-2 rounded px-2 py-1 hover:bg-gray-900 ">
              Crypto{' '}
            </li>
          </a>
        </Link>
        <Link href="/news">
          <a>
            <li className="rounded px-2 py-1 hover:bg-gray-900 ">News</li>
          </a>
        </Link>
      </ul>
    </header>
  );
};
export default Header;
