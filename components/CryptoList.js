import React from 'react';
import { motion } from 'framer-motion';

export const CryptoList = ({ crypto, sorter, currency, setSelectedCrypto }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {crypto &&
        crypto.length > 0 &&
        sorter(
          crypto.map(c => (
            <motion.li
              className="bg-gray-900 shadow px-10 py-4 rounded cursor-pointer flex flex-col"
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelectedCrypto(c.id)}
              key={c.id}>
              <div>
                <img
                  src={c.image}
                  alt={c.name}
                  height="100"
                  width="100"
                  loading="lazy"
                />
              </div>
              <h3 className="text-3xl font-black pl-2 text-orange-400 py-3">
                {c.name}
              </h3>
              <p className="text-lg">
                <span className="font-bold"> Rank:</span>
                <span className="font-bold text-orange-400">
                  {' '}
                  {c.market_cap_rank}
                </span>
              </p>
              <p className="text-lg">
                <span className="font-bold">Price:</span> {c.current_price}
                <span className="uppercase text-gray-600"> {currency}</span>
              </p>
              <p>
                <span className="font-bold">Price Change:</span>
                <span
                  className={
                    c.price_change_percentage_24h &&
                    c.price_change_percentage_24h.toString().includes('-')
                      ? 'text-red-600'
                      : 'text-green-600'
                  }>
                  {' '}
                  {c.price_change_percentage_24h}
                  /24h
                </span>
              </p>
            </motion.li>
          ))
        )}
    </ul>
  );
};
