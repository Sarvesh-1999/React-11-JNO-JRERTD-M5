import { memo } from "react";

const MemoChild = (props) => {
  console.log("I am MemoChild Component");

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Memo Child Component</h1>
    </div>
  );
};

export default memo(MemoChild);
// React.memo() OR memo() is used to memoized a component untill its props are unchanged
