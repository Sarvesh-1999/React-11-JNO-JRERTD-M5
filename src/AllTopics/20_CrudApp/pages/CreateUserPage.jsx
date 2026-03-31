import { useState } from "react";

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

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      //! using fetch method
      let resp = await fetch("http://localhost:9000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(resp);

      {
        /*
    ! using axios
    
    let resp = await axios.post("http://localhost:9000/users" , formData);
    console.log(resp)
        
    */
      }
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
        <form onSubmit={handleCreateUser}>
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
            <button>Create</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateUserPage;
