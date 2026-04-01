import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader/Loader";

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
    } catch (error) {
      console.log(error);
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
                <button>Edit</button>
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
