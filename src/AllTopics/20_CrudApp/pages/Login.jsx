import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    let payload = {
      email: form.email.trim(),
      password: form.password.trim(),
    };
    console.log(payload);
    sessionStorage.setItem("token", Date.now());
    toast.success("Logged in");
    navigate("/");
  };

  return (
    <section className="h-screen bg-gray-100 grid place-items-center">
      <form className="p-10 bg-white shadow-lg rounded" onSubmit={handleForm}>
        <h1 className="font-semibold text-xl mb-5">Login Form</h1>

        <div className="flex flex-col mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            value={form.email}
            onChange={handleChange}
            className="border px-4 py-1 border-gray-300 rounded focus:outline focus:outline-blue-500"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            value={form.password}
            onChange={handleChange}
            className="border px-4 py-1 border-gray-300 rounded  focus:outline focus:outline-blue-500"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold rounded w-full py-1 cursor-pointer hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
