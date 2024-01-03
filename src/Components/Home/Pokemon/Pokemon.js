/* import React from 'react'
import '../../Components.css'

const Pokemon = () => {

    return (
        <article className="pokemon">
            <p className='pokemon-id-back'>#025</p>
            <div className='pokemon-imagen'>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' alt="Pikachu" />
            </div>
            <div className='pokemon-info'>
                <div className='nombre-contenedor'>
                    <p className='pokemon-id'>#025</p>
                    <h2 className='pokemon-nombre'>Pikachu</h2>
                </div>
                <div className='pokemon-tipos'>
                    <p className='electric tipo'>ELECTRIC</p>
                    <p className='fighting tipo'>FIGHTING</p>
                </div>
                <div className='pokemon-stats'>
                    <p className='stat'>0.5m</p>
                    <p className='stat'>20kg</p>
                </div>
            </div>
        </article>
    )
}

export default Pokemon */


import React, { useState, useEffect } from 'react';

const Pokemon = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [pokemonId]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  const tipos = pokemon.types.map((type) => (
    <p key={type.type.name} className={`${type.type.name} tipo`}>
      {type.type.name}
    </p>
  ));

  let pokeId = pokemon.id.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  return (
    <article className="pokemon">
      <p className="pokemon-id-back">#{pokeId}</p>
      <div className="pokemon-imagen">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <div className="nombre-contenedor">
          <p className="pokemon-id">#{pokeId}</p>
          <h2 className="pokemon-nombre">{pokemon.name}</h2>
        </div>
        <div className="pokemon-tipos">{tipos}</div>
        <div className="pokemon-stats">
          <p className="stat">{pokemon.height / 10}m</p>
          <p className="stat">{pokemon.weight / 10}kg</p>
        </div>
      </div>
    </article>
  );
};

export default Pokemon;