const InputCount = ({ onAdd, stock }) => (
  <>
    <input onChange={onAdd} />
    <h1>{stock}</h1>
  </>
);

const ButtonCount = ({ onAdd, stock }) => (
  <>
    <button onClick={onAdd}>Ejecutar onAdd</button>
    <h1>{stock}</h1>
  </>
);

const Intercambilidad = ({ countType }) => {
  const onAdd = () => console.log("This is triggering onAdd");
  const Count = countType == "input" ? InputCount : ButtonCount;

  // const Count = countType == "button" ? ButtonCount : InputCount;
  return (
    <>
      <Count onAdd={onAdd} stock={1} />
      <ButtonCount onAdd={onAdd} stock={10} />
      <InputCount onAdd={onAdd} stock={200} />
    </>
  );
};

export default Intercambilidad;
