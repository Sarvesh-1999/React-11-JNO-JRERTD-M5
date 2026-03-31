import { useEffect, useState } from "react";

export const useDebounce = (query, delay = 1000) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(timer);
  }, [query]);

  return debouncedQuery;
};
