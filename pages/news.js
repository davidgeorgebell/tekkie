import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

import Stories from '../components/Stories';
import { getStoryIds } from '../lib/hackernews';

const News = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <Layout title="news">
      {storyIds.map(storyId => (
        <Stories storyId={storyId} />
      ))}
    </Layout>
  );
};
export default News;
