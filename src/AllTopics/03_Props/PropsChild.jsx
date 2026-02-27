const PropsChild = (props) => {
  console.log(props);
  // {x:{data1:"Hi", data2:[10,20,30]}}

  return (
    <div>
      <h1>PropsChild </h1>
      <h2> {props.x.data1} </h2>
      <h2> {props.x.data2} </h2>
    </div>
  );
};

export default PropsChild;
