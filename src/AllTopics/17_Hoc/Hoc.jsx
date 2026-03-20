const HOC = (Wrapper) => {
  let data = "Hello WOrld";

  return () => {
    return <Wrapper data={data} />;
  };
  
};

export default HOC;
