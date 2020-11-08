import { useEffect, useState } from 'react';

import { getStory } from '../lib/hackernews';
import { timeAdded } from '../styles/timeAdded';

const Stories = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
    console.log(story);
  }, []);

  return (
    <div>
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        <h3>{story.title}</h3>
      </a>
      <time>
        {timeAdded(story.time)}
        {' '}
        ago
      </time>
      {/* <a href={story.url} target="_blank" rel="noopener noreferrer">{story.url}</a> */}
    </div>
  );
};

export default Stories;
