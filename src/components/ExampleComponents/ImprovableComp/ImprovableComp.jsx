import React, { useState } from "react";
import Input from "./Input";

export default function ImprovableComp() {
  const [userData, setUserData] = useState({});
  const handleChange = ({ target }) => {
    setUserData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  function onSubmit(e) {
    e.preventDefault;
    console.log(
      `Your name is ${userData.name} ${userData.surname} and you have ${userData.age}`
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <Input label={"Nombre"} name="name" handleChange={handleChange} />
      <Input label={"Apellido"} name="surname" handleChange={handleChange} />
      <Input label={"Edad"} name="age" handleChange={handleChange} />
      <button
        disabled={!(userData.name && userData.surname && userData.age)}
        type="submit"
      >
        Crear orden
      </button>
    </form>
  );
}

/* import React, { useState } from "react";

export default function ImprovableComp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  function onNameChange(evt) {
    setName(evt.target.value);
  }
  function onSurnameChange(evt) {
    setSurname(evt.target.value);
  }
  function onAgeChange(evt) {
    setAge(evt.target.value);
  }

  function onSubmit() {
    console.log(
      "Your name is " + name + " " + surname + " and you have " + age + " years"
    );
  }

  return (
    <>
      <div>
        <>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>Nombre</label>
            <input
              name="name"
              type="text"
              onChange={(evt) => onNameChange(evt)}
            ></input>
          </div>
        </>
        <>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>Apellido</label>
            <input
              name="surname"
              type="text"
              onChange={(evt) => onSurnameChange(evt)}
            ></input>
          </div>
        </>
        <>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>Edad</label>
            <input
              name="age"
              type="text"
              onChange={(evt) => onAgeChange(evt)}
            ></input>
          </div>
        </>

        {
          <button
            disabled={!(name !== "" && surname !== "" && age !== "")}
            onClick={(evt) => onSubmit(evt)}
            style={{}}
          >
            Crear orden
          </button>
        }
      </div>
    </>
  );
}
 */
