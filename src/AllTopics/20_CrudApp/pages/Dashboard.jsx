import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [skip, setSkip] = useState(0);

  return (
    <section className="pt-20 px-10">
      <header className="font-bold my-5">
        <h1>My Dashboard</h1>
      </header>

      {/* SEARCH BAR */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* SORTING */}
      <Sorting sortBy={sortBy} setSortBy={setSortBy} />

      {/* DISPLAY POSTS FROM API */}

      {/* PAGINATION */}
      <Pagination skip={skip} setSkip={setSkip} />
    </section>
  );
};

export default Dashboard;
