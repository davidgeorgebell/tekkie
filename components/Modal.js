import React from 'react';
import { motion } from 'framer-motion';

export const Modal = ({ coin, setSelectedCrypto }) => {
  const handleClick = e => {
    if (e.target.classList.contains('backdrop')) setSelectedCrypto(null);
  };

  return (
    <motion.div
      className="backdrop cursor-pointer fixed top-0 left-0 bg-blue-400 w-full h-full bg-opacity-25 rounded shadow-2xl"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.div
        className="bg-gray-900 max-w-xl h-64 my-32 py-56 mx-auto cursor-default rounded-xl shadow-xl "
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}>
        <ul className="flex flex-col items-center justify-center h-full ">
          {coin &&
            coin.map(d => (
              <li key={d.id} className="cursor-default ">
                <img
                  className="items-center"
                  src={d.image}
                  alt={d.name}
                  height="100"
                  width="100"
                />
                <h2 className="text-2xl md:text-4xl font-black">{d.name}</h2>
                <p className="text-lg">
                  <span className="font-bold text-orange-400">
                    Circulating Supply:
                  </span>{' '}
                  {d.circulating_supply}
                </p>
                <p className="text-lg">
                  <span className="font-bold text-orange-400">
                    Total Volume:
                  </span>{' '}
                  {d.total_volume}
                </p>
                <p className="text-lg">
                  <span className="font-bold text-orange-400">High 24/h: </span>
                  {d.high_24h}
                </p>
                <p className="text-lg">
                  <span className="font-bold text-orange-400">Low 24/h: </span>{' '}
                  {d.low_24h}
                </p>
              </li>
            ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
