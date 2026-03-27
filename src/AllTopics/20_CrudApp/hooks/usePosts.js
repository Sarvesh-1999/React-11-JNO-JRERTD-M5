import { useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  

  return { posts, loading };
};
