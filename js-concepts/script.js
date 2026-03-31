function debounceSearch(fn, delay = 500) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log(query);
}

let debouncedSearch = debounceSearch(searchQuery, 5000);

debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");
