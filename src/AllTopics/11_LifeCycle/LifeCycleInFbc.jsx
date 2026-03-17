import { useEffect, useState, useRef } from "react";

const LifeCycleInFbc = () => {
  const [count, setCount] = useState(0);
  const initailRender = useRef(true); // {current : true}

  useEffect(() => {
    console.log("Component Mounted");
    let id = setInterval(() => {
      console.log("API CALL");
    }, 1500);

    return () => {
      console.log("Component Unmounted");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (initailRender.current) {
      initailRender.current = false;
      return;
    }

    console.log("Component Updated");
  }, [count]);

  return (
    <div className="p-5">
      <h1 className="text-center text-4xl">
        Learn Life-Cycle in Function Component {count}
      </h1>

      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default LifeCycleInFbc;
