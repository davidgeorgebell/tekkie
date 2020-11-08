export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newstoriesUrl = `${baseUrl}newstories.json`;
export const topstoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  try {
    const res = await fetch(topstoriesUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const getStory = async storyId => {
  try {
    const res = await fetch(`${storyUrl + storyId}.json`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
