import React from 'react';

export const CryptoList = ({
  handleRankOrder,
  crypto,
  sorter,
  currency,
  setSelectedCrypto,
}) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-1 gap-2">
      <div className="grid grid-cols-4 bg-gray-900 shadow px-4 py-4 text-teal-400 font-bold">
        <div>
          Rank
          <select name="rank" onChange={handleRankOrder}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
        <div>Name</div>
        <div>current price</div>
        <div>24h change</div>
      </div>
      {crypto &&
        crypto.length > 0 &&
        sorter(
          crypto.map(c => (
            <li
              onClick={() => setSelectedCrypto(c.id)}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-gray-900 shadow px-4 py-2 rounded"
              key={c.id}>
              <p>{c.market_cap_rank}</p>
              <div className="flex flex-wrap">
                <img src={c.image} alt={c.name} height="25" width="25" />
                <h3 className="pl-2">{c.name}</h3>
              </div>
              <p>
                {c.current_price}{' '}
                <span className="uppercase text-gray-400">{currency}</span>
              </p>
              {/* <p>market cap: {c.market_cap}</p>
              <p>total volume: {c.total_volume}</p>
              <p>circulating supply: {c.circulating_supply}</p> */}
              <p
                className={
                  c.price_change_percentage_24h.toString().includes('-')
                    ? 'text-red-600'
                    : 'text-green-600'
                }>
                {c.price_change_percentage_24h}
                <span>/24h</span>
              </p>
            </li>
          ))
        )}
    </ul>
  );
};
