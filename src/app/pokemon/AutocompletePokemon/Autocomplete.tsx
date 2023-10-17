'use client'
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Pokemon {
  name: string;
}

const PokemonAutocomplete: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [options, setOptions] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151'`);
        if (response.ok) {
          const data = await response.json();
          setOptions(data.results);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
      setLoading(false);
    };

    if (search) {
      fetchPokemon();
    } else {
      setOptions([]);
    }
  }, [search]);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      onInputChange={handleInputChange}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a Pokémon"
          variant="outlined"
          style={{ backgroundColor: 'white' }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? 'Loading...' : null}
                <IconButton>
                 <SearchIcon />
                </IconButton>
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default PokemonAutocomplete;
