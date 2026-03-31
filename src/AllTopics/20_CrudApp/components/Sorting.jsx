const Sorting = ({ sortBy, setSortBy }) => {
  return (
    <>
    
      <select
        className="outline-0"
        id="sort"
        name="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="" disabled selected>Sort</option>
        <option value="">All</option>
        <option value="title">Title</option>
        <option value="views">Views</option>
      </select>
    </>
  );
};

export default Sorting;
