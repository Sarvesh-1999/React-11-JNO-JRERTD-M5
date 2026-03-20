// import Nav from "./Nav";
// import Home from "./Home";
// import About from "./About";
// import { useState } from "react";

// const Dashboard = () => {
//   const [path, setPath] = useState("/");
//   return (
//     <div>
//       <Nav setPath={setPath} />

//       {path === "/" && <Home />}
//       {path === "/about" && <About />}
//     </div>
//   );
// };

// export default Dashboard;

// ! USING ROUTING - REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";

const Dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
