import React, { useState, useEffect } from "react";

const PokeAPI = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results));
  };

  return (
    <fieldset>
      <legend>PokeAPI</legend>
      <button onClick={() => getPokemon()}>Fetch Pokemon</button>
      <ol>
        {pokemon.length > 0 ? (
          pokemon.map((p, idx) => <li key={idx}>{p.name}</li>)
        ) : (
          <p>Nothing Yet</p>
        )}
      </ol>
    </fieldset>
  );
};

export default PokeAPI;
