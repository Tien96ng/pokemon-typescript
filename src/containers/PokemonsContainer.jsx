import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer() {

  // Protecting against getting errors returned.
  // Will default Pokemons to an empty array (It's an arr according to the docs).
  // Data will default empty obj.
  const { data: { pokemons: [] }  = {} } = useQuery(GET_POKEMONS, {
    // FIrst 9 Pokemon, works for pagniation later.
    variables: { first: 9},
  });

  return(
    <div className="container">
      { pokemons && pokemons.map(p => 
        <Pokemon 
          key={p.id}
          pokemon={pokemon}
        /> ) 
      }
    </div> 
  )
}