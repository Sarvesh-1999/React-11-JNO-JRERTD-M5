import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Home from "./Home";
// import About from "./About";
// import Nav from "./Nav";

//! LAZY LOADING
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Nav = lazy(() => import("./Nav"));

const CodeSplittingExample = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p className="text-5xl font-extrabold">Loading...</p>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default CodeSplittingExample;
