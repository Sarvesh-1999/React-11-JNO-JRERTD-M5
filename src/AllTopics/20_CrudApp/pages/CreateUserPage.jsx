import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUserPage = () => {
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

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      //! USING AXIOS
      let resp = await axios.post("http://localhost:9000/users", formData);
      console.log(resp);
      navigate("/all-users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-20 px-4 min-h-screen bg-gray-100">
      <header>
        <h1>Create User Form</h1>
      </header>

      <article>
        <form>
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
            <button type="button" onClick={handleCreateUser}>
              Create
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateUserPage;
