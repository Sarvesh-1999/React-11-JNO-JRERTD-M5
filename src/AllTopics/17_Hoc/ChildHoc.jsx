import HOC from "./Hoc";

const ChildHoc = (props) => {
  console.log(props); // {}

  return (
    <div>
      <h1 className="font-bold text-4xl my-5">
        Child Component
      </h1>
    </div>
  );
};

export default HOC(ChildHoc);
