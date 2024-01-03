/* import React from 'react'
import Pokemon from './Pokemon/Pokemon'
import '../Components.css'

const Home = () => {
    return (
        <main>
            <div id='todos'>
                <div
                    className='pokemon-todos' id='listaPokemon'>
                    <Pokemon />
                </div>
            </div>
        </main>
    )
}

export default Home */










/* import React from 'react';
import Pokemon from './Pokemon/Pokemon';
import '../Components.css';

const Home = () => {
  const pokemonIds = Array.from({ length: 151 }, (_, index) => index + 1);

  return (
    <main>
      <div id='todos'>
        <div className='pokemon-todos' id='listaPokemon'>
          {pokemonIds.map((pokemonId) => (
            <Pokemon key={pokemonId} pokemonId={pokemonId} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home; */








import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Pokemon from './Pokemon/Pokemon';
import '../Components.css';

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [filteredPokemonIds, setFilteredPokemonIds] = useState([]);

  const getPokemonTypes = async (pokemonId) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      const types = data.types.map((type) => type.type.name);
      return types;
    } catch (error) {
      console.error('Error al obtener los tipos del Pokémon', error);
      return [];
    }
  };

  const pokemonIds = Array.from({ length: 304 }, (_, index) => index + 1);
  //Para ver los de primera generacion:
  //const pokemonIds = Array.from({ length: 152 }, (_, index) => index + 1)
  //Para ver los de segunda generacion:
  //const pokemonIds = Array.from({ length: 152 }, (_, index) => index + 152)
  

  useEffect(() => {
    const filterPokemons = async () => {
      const filteredPokemons = await Promise.all(
        pokemonIds.map(async (pokemonId) => {
          const pokemonTypes = await getPokemonTypes(pokemonId);
          return { pokemonId, pokemonTypes };
        })
      );

      const filteredAndIncluded = filteredPokemons.filter((pokemon) => {
        return !selectedType || pokemon.pokemonTypes.includes(selectedType);
      });

      const resultIds = filteredAndIncluded.map((pokemon) => pokemon.pokemonId);
      setFilteredPokemonIds(resultIds);
    };

    filterPokemons();
  }, [selectedType, pokemonIds]);

  return (
    <body>
      <header>
        <Navbar onTypeSelect={setSelectedType} />
      </header>
      <main>
        <div id='todos'>
          <div className='pokemon-todos' id='listaPokemon'>
            {filteredPokemonIds.map((pokemonId) => (
              <Pokemon key={pokemonId} pokemonId={pokemonId} />
            ))}
          </div>
        </div>
      </main>
    </body>
  );
};

export default Home;
