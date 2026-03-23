import { useState, useMemo, useCallback } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  // function multiply() {
  //   console.log("I am Multiply");
  //   return add * 5;
  // }

  //! it returns memoized value
  let multiply = useMemo(() => {
    console.log("I am Multiply");
    return add * 5;
  }, [add]);

  // function display() {
  //   console.log("I am display");
  // }

  //! it returns memoized function
  const display = useCallback(() => {
    console.log("I am display");
  }, []);

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mb-5">Learn useMemo and useCallback</h1>

      <article className="my-2">
        Addition : {add}
        <button
          className="ms-5 bg-gray-300 px-4 rounded"
          onClick={() => setAdd((prev) => prev + 1)}
        >
          increment
        </button>
      </article>

      <article className="my-2">
        Substraction : {minus}
        <button
          className="ms-5 bg-gray-300 px-4 rounded"
          onClick={() => setMinus((prev) => prev - 1)}
        >
          decrement
        </button>
      </article>

      <article className="my-2">Multiplication : {multiply}</article>

      <hr />

      <MemoChild display={display} />
    </div>
  );
};

export default MemoExample;
