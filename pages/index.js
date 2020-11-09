import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import { getMarketData } from '../lib/crypto';

export const currecies = [
  { name: 'usd' },
  { name: 'gbp' },
  { name: 'jpy' },
  { name: 'eur' },
  { name: 'twd' },
  { name: 'cny' },
  { name: 'rub' },
];

const Home = () => {
  const [crypto, setCrypto] = useState([]);
  const [currency, setCurrency] = useState('gbp');
  const [rankOrder, setRankOrder] = useState('desc');

  useEffect(() => {
    getMarketData(currency).then(data => setCrypto(data));
  }, [currency, rankOrder]);

  const handleChange = e => {
    setCurrency(e.target.value);
  };

  const handleRankOrder = e => {
    setRankOrder(e.target.value);
  };

  const sorter = data => {
    if (rankOrder === 'asc') {
      return data.sort((a, b) =>
        a.market_cap_rank > b.market_cap_rank ? 1 : -1
      );
    }
    if (rankOrder === 'desc') {
      return data.sort((a, b) =>
        a.market_cap_rank > b.market_cap_rank ? -1 : 1
      );
    }
  };

  return (
    <Layout title="home">
      <h1>Crypto</h1>
      <form>
        <label>
          Pick a currency:
          <select onChange={handleChange}>
            {currecies.map(c => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </form>
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

        {/* .sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))} */}
      </ul>
    </Layout>
  );
};
export default Home;
