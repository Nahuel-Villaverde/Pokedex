import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Pokemon from './Pokemon/Pokemon';
import '../Components.css';

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedGeneration, setSelectedGeneration] = useState(null); // Agregar esta línea
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

  const pokemonIds = Array.from({ length: 251 }, (_, index) => index + 1);
  //Para ver los de primera generacion:
  //const pokemonIds = Array.from({ length: 152 }, (_, index) => index + 1)
  //Para ver los de segunda generacion:
  //const pokemonIds = Array.from({ length: 100 }, (_, index) => index + 152)
  

  useEffect(() => {
    const filterPokemons = async () => {
      const filteredPokemons = await Promise.all(
        pokemonIds.map(async (pokemonId) => {
          const pokemonTypes = await getPokemonTypes(pokemonId);
          return { pokemonId, pokemonTypes };
        })
      );
  
      const filteredAndIncluded = filteredPokemons.filter((pokemon) => {
        return (
          (!selectedType || pokemon.pokemonTypes.includes(selectedType)) &&
          (!selectedGeneration || (selectedGeneration === 1 ? pokemon.pokemonId <= 151 : (pokemon.pokemonId >= 152 && pokemon.pokemonId <= 251)))
        );
      });
  
      const resultIds = filteredAndIncluded.map((pokemon) => pokemon.pokemonId);
      setFilteredPokemonIds(resultIds);
    };
  
    filterPokemons();
  }, [selectedType, selectedGeneration, pokemonIds]);

  return (
    <body>
      <header>
        <Navbar onTypeSelect={setSelectedType} onGenerationSelect={setSelectedGeneration} />
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
