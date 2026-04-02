import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  let token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    let confirmMsg = confirm("Are you sure ?");
    if (confirmMsg) {
      // remove token
      sessionStorage.removeItem("token");

      toast.success("Logged out")

      // navigate to login
      navigate("/login");
    }
  };

  return (
    <header className="py-5 px-10 flex justify-between items-center shadow fixed top-0 w-full bg-white ">
      <figure className="text-3xl font-bold">QManager</figure>

      <nav className="flex items-center gap-10 font-semibold">
        {token ? (
          <>
            <Link to={"/"}>Dashboard</Link>
            <Link to="/create-user">Create User</Link>
            <Link to="/all-users">All Users</Link>
            <div onClick={handleLogout} className="cursor-pointer">
              Logout
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
