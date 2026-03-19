import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { useState } from "react";

const Dashboard = () => {
  const [path, setPath] = useState("/");
  return (
    <div>
      <Nav setPath={setPath} />

      {path === "/" && <Home />}
      {path === "/about" && <About />}
    </div>
  );
};

export default Dashboard;
