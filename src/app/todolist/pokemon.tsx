'use client'
import { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';
import Comment from './comment';

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (response.ok) {
        const data: PokemonData = await response.json();
        setPokemonData(data);
      } else {
        setPokemonData(null);
      }
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      setPokemonData(null);
    }
  };

  return (
    <div>
      <Typography variant="h4">Pokemon Search Section</Typography>
      <Comment comment="This is a comment from the PokemonSearch component" />

      <Input
        type="text"
        placeholder="Enter Pokemon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={fetchPokemonData}>
        Search
      </Button>
      {pokemonData && (
        <div>
          <Typography variant="h5">{pokemonData.name}</Typography>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;