import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon.jsx';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsContainer() {
  const [page, setPage] = useState(1);


  // Protecting against getting errors returned.
  // Will default Pokemons to an empty array (It's an arr according to the docs).
  // Data will default empty obj.
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: (page * 9) },
  });

  return (
    <div className="container">
      {
        pokemons 
        && 
        pokemons.map(pokemon => 
          <Pokemon 
            key={pokemon.id} 
            pokemon={pokemon} 
          />
        )
      }
      <p>Page {page} </p>
      <button type="click" onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}