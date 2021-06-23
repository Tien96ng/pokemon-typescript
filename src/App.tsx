import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer';

export default function App() {
	const client: any = new ApolloClient({
		uri: process.env.REACT_APP_POKEMON_GRAPHQL_ENDPOINT
	});

	return (
		<ApolloProvider client={client}>
			{console.log(process.env.REACT_APP_POKEMON_GRAPHQL_ENDPOINT)}
			<PokemonsContainer />
		</ApolloProvider>
	)
}

// named component { ApolloProvider }
// @apollo/react-hooks