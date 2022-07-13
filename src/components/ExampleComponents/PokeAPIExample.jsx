import React, { useState, useEffect } from "react";

// const PokeAPIExample = () => {
//   const [pokemon, setPokemon] = useState({});
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/gengar")
//       .then((res) => res.json())
//       .then((data) => setPokemon(data));
//   }, []);
//   return (
//     <div className="card" style={{ width: "15rem" }}>
//       {/* <img
//         className="card-img-top"
//         src={pokemon.sprites.front_default}
//         alt="Card image cap"
//       /> */}
//       <div className="card-body d-flex flex-column justify-content-center">
//         <h5 className="card-title">{pokemon.name}</h5>
//         {/* <p className="card-text">{`Type:  available!`}</p> */}
//         <a href="google.com" className="btn btn-primary ">
//           See product details
//         </a>
//       </div>
//     </div>
//   );
// };

// export default PokeAPIExample;

const PokeAPIExample = () => {
  const [pokemon, setPokemon] = useState({});
  const url = "https://pokeapi.co/api/v2/pokemon/gengar";
  const urlToPost = "http://testPost/new";
  const dataToSave = { name: "test", age: 30 };
  useEffect(() => {
    fetch(urlToPost, { method: "post", body: dataToSave }).then((res) => {
      if (res.ok) {
        alert("Usuario registrado con exito");
      } else {
        alert("Hubo un problema en el registro");
      }
    });
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((res) => setPokemon(res));
  }, []);
  return (
    <>
      <h2>{pokemon.name}</h2>
      {/* <img src={pokemon.sprites.front_default} /> */}
    </>
  );
};

export default PokeAPIExample;
