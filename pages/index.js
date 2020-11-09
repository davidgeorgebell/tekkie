import { useState, useEffect } from 'react';
import { CryptoList } from '../components/CryptoList';
import { CurrencyForm } from '../components/CurrencyForm';

import Layout from '../components/Layout';
import { Modal } from '../components/Modal';
import { getMarketData } from '../lib/crypto';

const Home = () => {
  const [crypto, setCrypto] = useState([]);
  const [currency, setCurrency] = useState('gbp');
  const [rankOrder, setRankOrder] = useState('desc');
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  useEffect(() => {
    getMarketData(currency).then(data => setCrypto(data));
  }, [currency, rankOrder]);

  const handleSelectCurrency = e => {
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

  const coin = selectedCrypto && crypto.filter(c => c.id === selectedCrypto);

  return (
    <Layout title="home">
      <h1>Crypto</h1>
      <CurrencyForm handleSelectCurrency={handleSelectCurrency} />
      <CryptoList
        handleRankOrder={handleRankOrder}
        crypto={crypto}
        sorter={sorter}
        currency={currency}
        setSelectedCrypto={setSelectedCrypto}
      />
      {selectedCrypto && (
        <Modal coin={coin} setSelectedCrypto={setSelectedCrypto} />
      )}
    </Layout>
  );
};
export default Home;
