import React from 'react';

const Header = () => {
  return (
    <header className="py-6 flex justify-between">
      <h1 className="text-2xl md:text-4xl font-black text-orange-400">
        Techie
      </h1>
      <ul className="flex items-center">
        <li className="mx-2 rounded px-2 py-1 hover:bg-gray-900 ">
          {' '}
          <a href="#">Crypto</a>
        </li>
        <li className="rounded px-2 py-1 hover:bg-gray-900 ">
          {' '}
          <a href="#">News</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
