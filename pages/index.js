import { useState, useEffect } from 'react';

import Layout from '../components/Layout';

const Home = () => {
  const [crypto, setCrypto] = useState([]);

  return (
    <Layout title="home">
      <h1>Crypto</h1>
    </Layout>
  );
};
export default Home;
