import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader/Loader";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);
    try {
      let resp = await axios.get("http://localhost:9000/users");
      console.log(resp);

      setTimeout(() => {
        setAllUsers(resp.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setAllUsers([]);
    } finally {
      // setLoading(false);
    }
  }

  async function deleteUser(id) {
    try {
      let resp = await axios.delete(`http://localhost:9000/users/${id}`);
      console.log(resp);
      toast.success("User deleted");
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="max-w-3xl mx-auto pt-20 px-4">
      {allUsers.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No users available</p>
      ) : (
        allUsers.map((user) => {
          return (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-md p-5 mb-5 transition hover:shadow-lg "
            >
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold text-gray-900">Username:</span>{" "}
                {user.username}
              </p>

              <p className="text-gray-700 text-sm">
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                {user.email}
              </p>

              <div className="mt-4 flex gap-3">
                <Link
                  to={`/edit-user/${user.id}`}
                  className="px-4 py-1.5 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-4 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default AllUsersPage;
