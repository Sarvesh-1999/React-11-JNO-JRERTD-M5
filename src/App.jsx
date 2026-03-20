import FunctionBased from "./AllTopics/01_TypesOfComponents/FunctionBased";
import ClassBased from "./AllTopics/01_TypesOfComponents/ClassBased";
import StatesInFBC from "./AllTopics/02_States/StatesInFBC";
import ThemeChange from "./AllTopics/02_States/ThemeChange";
import Counter from "./AllTopics/02_States/Counter";
import StateTask1 from "./AllTopics/02_States/StatesTask1";
import StatesInCBC from "./AllTopics/02_States/StatesInCBC";
import PropsParent from "./AllTopics/03_Props/PropsParent";
import ChildrenProps from "./AllTopics/04_ChildrenProps/ChildrenProps";
import ChildrenProps2 from "./AllTopics/04_ChildrenProps/ChildrenProps2";
import Child1 from "./AllTopics/04_ChildrenProps/Child1";
import Child2 from "./AllTopics/04_ChildrenProps/Child2";
import UpliftingParent from "./AllTopics/05_StateUplifting/UpliftingParent";
import DrillingParent from "./AllTopics/06_PropsDrilling/DrillingParent";
import ContextParent from "./AllTopics/07_Context/ContextParent";
import ContextProvider from "./AllTopics/07_Context/ContextProvider";
import ControlledForms1 from "./AllTopics/08_Forms/ControlledForms1";
import ControlledForms2 from "./AllTopics/08_Forms/ControlledForms2";
import TodoWrapper from "./TodoApp/TodoWrapper";
import TodoContextProvider from "./TodoApp/ContextProvider";
import ReactCss from "./AllTopics/09_ReactCss/ReactCss";
import TailwindPractice1 from "./AllTopics/10_TailwindCss/TailwindPractice1";
import UncontrolledForms from "./AllTopics/08_Forms/UncontrolledForms";
import LifeCycleInCbc from "./AllTopics/11_LifeCycle/LifeCycleInCbc";
import { useState } from "react";
import LifeCycleInFbc from "./AllTopics/11_LifeCycle/LifeCycleInFbc";
import Todos from "./AllTopics/12_Fetch/Todos";
import ReducerCounter from "./AllTopics/13_Reducer/ReducerCounter";
import ReducerTodo from "./AllTopics/13_Reducer/ReducerTodo";
import Users from "./AllTopics/14_CustomHook/Users";
import MemoExample from "./AllTopics/15_MemoAndCallback/MemoExample";
import Dashboard from "./AllTopics/16_Routing/Dashboard";
import ParentHoc from "./AllTopics/17_Hoc/ParentHoc";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <FunctionBased /> */}
      {/* <ClassBased /> */}
      {/* <StatesInFBC /> */}
      {/* <ThemeChange /> */}
      {/* <Counter /> */}
      {/* <StateTask1 /> */}
      {/* <StatesInCBC /> */}
      {/* <PropsParent /> */}
      {/* <ChildrenProps /> */}

      {/* <ChildrenProps2>
        <Child1 />
        <Child2 />
      </ChildrenProps2> */}

      {/* <UpliftingParent /> */}
      {/* <DrillingParent /> */}

      {/* <ContextProvider>
        <ContextParent />
      </ContextProvider> */}

      {/* <ControlledForms1 /> */}

      {/* <TodoContextProvider>
        <TodoWrapper />
      </TodoContextProvider> */}

      {/* <ReactCss /> */}

      {/* <TailwindPractice1 /> */}

      {/* <UncontrolledForms /> */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInCbc />} */}

      {/* <LifeCycleInFbc /> */}

      {/* <Todos /> */}

      {/* <ReducerCounter/> */}

      {/* <ReducerTodo /> */}

      {/* <Users /> */}

      {/* <MemoExample /> */}

      <Dashboard />

      {/* <ParentHoc /> */}
    </>
  );
};
export default App;
