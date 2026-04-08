//! REACT WAY
import { createRoot } from "react-dom/client";
import CodeSplittingExample from "./AllTopics/21_CodeSplitting/CodeSplittingExample";
import App from "./App";

// global css
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);

//! JS WAY
// const div = document.getElementById("root");
// const h1Tag = document.createElement("h1");
// h1Tag.textContent = "Hello React";
// div.append(h1Tag);
