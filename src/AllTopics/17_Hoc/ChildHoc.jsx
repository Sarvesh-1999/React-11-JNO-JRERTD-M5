import Hoc from "./Hoc";

const ChildHoc = (props) => {
  console.log(props);
  
  return (
    <div className="text-center p-5">
      <h1 className="font-bold text-4xl my-5">
        Child Hoc
      </h1>
    </div>
  );
};

export default Hoc(ChildHoc);
