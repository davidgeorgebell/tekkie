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
      <h2 className="text-2xl md:text-4xl px-4 py-10">Top Stories</h2>
      <ul>
        {storyIds.map(storyId => (
          <Stories storyId={storyId} />
        ))}
      </ul>
    </Layout>
  );
};
export default News;
