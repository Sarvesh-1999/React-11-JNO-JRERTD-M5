import PropsChild from "./PropsChild";

const PropsParent = () => {
  let data1 = "Hii";
  let data2 = [10, 20, 30];

  return (
    <div>
      <h1>PropsParent</h1>

      <PropsChild x={{ data1, data2 }} />
    </div>
  );
};

export default PropsParent;
