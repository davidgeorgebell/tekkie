import { useEffect, useState } from 'react';

import { getStory } from '../lib/hackernews';
import { mapTime } from '../utils/mapTime';

const Stories = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
    console.log(story);
  }, []);

  return story ? (
    <a href={story.url} target="_blank" rel="noopener noreferrer">
      <li className="hover:bg-gray-900 p-4 rounded">
        <h3 className="text-xl md:text-2xl font-black text-orange-400 py-3">
          {story.title}
        </h3>
        {story && story.time && <time>{mapTime(story.time)} ago</time>}
        {/* <a href={story.url} target="_blank" rel="noopener noreferrer">{story.url}</a> */}
      </li>
    </a>
  ) : null;
};

export default Stories;
