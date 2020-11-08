import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import { getMarketData } from '../lib/crypto';

const Home = () => {
  const [crypto, setCrypto] = useState([]);
  const [currency, setCurrency] = useState('gbp');

  useEffect(() => {
    getMarketData(currency).then(data => setCrypto(data));
  }, []);

  return (
    <Layout title="home">
      <h1>Crypto</h1>
      <ul>
        {crypto &&
          crypto.length > 0 &&
          crypto.map(c => (
            <li key={c.id}>
              <p>rank: {c.market_cap_rank}</p>
              <img src={c.image} alt={c.name} height="45" width="45" />
              <h3>{c.name}</h3>
              <p>
                current price: {c.current_price}
                {currency}
              </p>
              <p>market cap: {c.market_cap}</p>
              <p>total volume: {c.total_volume}</p>
              <p>circulating supply: {c.circulating_supply}</p>
              <p>24h: {c.price_change_percentage_24h}</p>
            </li>
          ))}
      </ul>
    </Layout>
  );
};
export default Home;
