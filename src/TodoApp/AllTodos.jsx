import { useContext } from "react";
import { todoContext } from "./ContextProvider";

const AllTodos = () => {
  let { todos } = useContext(todoContext);

  console.log(todos); //[{},{},{}.....]

  return <div>AllTodos</div>;
};

export default AllTodos;
