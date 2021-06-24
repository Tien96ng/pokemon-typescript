import React from 'react';

export function Pokemon({ pokemon }) {
    return(
    <div>
      <h1>{pokemon.number} - {pokemon.name}</h1>
      <img src={pokemon.image} alt={`pokemon: ${pokemon.name}`} />
    </div>
  )
}
