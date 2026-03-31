import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";
import { usePosts } from "../hooks/usePosts";
import { useDebounce } from "../hooks/useDebounce";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [skip, setSkip] = useState(0);

  const debouncedQuery = useDebounce(query, 2000);
  const { posts, loading } = usePosts({ query: debouncedQuery, sortBy, skip });

  return (
    <section className="min-h-screen bg-gray-100 pt-20 px-4 md:px-10">
      {/* HEADER */}
      <header className="my-6">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Manage and explore posts efficiently
        </p>
      </header>

      {/* CONTROLS */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6 flex flex-col items-center md:flex-row gap-4 justify-between">
        <SearchBar query={query} setQuery={setQuery} />
        <Sorting sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-500 animate-pulse">
            Loading posts...
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                {/* TABLE HEADER */}
                <thead className="bg-gray-800 text-white sticky top-0">
                  <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Views</th>
                  </tr>
                </thead>

                {/* TABLE BODY */}
                <tbody>
                  {posts.length > 0 ? (
                    posts.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-3 font-medium text-gray-700">
                          #{item.id}
                        </td>
                        <td className="p-3 text-gray-800">{item.title}</td>
                        <td className="p-3 text-blue-600 font-semibold">
                          {item.views}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center p-6 text-gray-500">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="p-4 border-t bg-gray-50">
              <Pagination skip={skip} setSkip={setSkip} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
