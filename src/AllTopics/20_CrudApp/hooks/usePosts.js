import { useEffect, useState } from "react";
import { BASE_URL, LIMIT } from "../constant";

export const usePosts = ({ query, sortBy, skip }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPosts() {
    setLoading(true);

    let URL = `${BASE_URL}/posts?limit=${LIMIT}&skip=${skip}`;

    if (query) {
      URL = `${BASE_URL}/posts/search?q=${query}&limit=${LIMIT}&skip=${skip}`;
    }
    
    try {
      let resp = await fetch(URL);
      let data = await resp.json();
      console.log(data);

      let sortedData = [...data.posts];

      if (sortBy === "title") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      }

      if (sortBy === "views") {
        sortedData.sort((a, b) => b.views - a.views);
      }

      setPosts(sortedData);
    } catch (error) {
      console.log(error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, [query, sortBy, skip]);

  return { posts, loading };
};
