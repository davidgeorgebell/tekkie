import React from 'react';

export const Modal = ({ coin, setSelectedCrypto }) => {
  const handleClick = e => {
    if (e.target.classList.contains('backdrop')) setSelectedCrypto(null);
  };

  return (
    <div
      className="backdrop fixed top-0 left-0 bg-blue-400 w-full h-full bg-opacity-25"
      onClick={handleClick}>
      <ul className="max-w-2xl max-h-5xl my-40 mx-auto bg-gray-600 p-10">
        {coin &&
          coin.map(d => (
            <li key={d.id}>
              <h2>{d.name}</h2>
              <p>{d.circulating_supply}</p>
              <p>{d.circulating_supply}</p>
              <p>{d.circulating_supply}</p>
              <p>{d.circulating_supply}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
