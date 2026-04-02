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
    <section className="pt-20">
      {allUsers.length === 0 ? (
        <p>No users available</p>
      ) : (
        allUsers.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>Username :</strong>
                {user.username}
              </p>
              <p>
                <strong>Email :</strong>
                {user.email}
              </p>
              <div>
                <Link to={`/edit-user/${user.id}`}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default AllUsersPage;
