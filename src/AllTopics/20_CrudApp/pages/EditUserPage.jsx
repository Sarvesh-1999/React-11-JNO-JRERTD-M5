import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditUserPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const params = useParams();

  async function getEditUser() {
    try {
      let resp = await axios.get(`http://localhost:9000/users/${params.id}`);
      console.log(resp);
      setFormData(resp.data);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }

  useEffect(() => {
    getEditUser();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let res = await axios.put(
        `http://localhost:9000/users/${params.id}`,
        formData,
      );
      toast.success("User updated");
      navigate("/all-users");
    } catch (error) {
      console.log(error);
      toast.error("Unable to update");
    }
  };

  return (
    <section className="pt-20 px-4 min-h-screen bg-gray-100">
      <header>
        <h1>Edit User</h1>
      </header>

      <article>
        <form onSubmit={handleUpdateUser}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Update</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditUserPage;
