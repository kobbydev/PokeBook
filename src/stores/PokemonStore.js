import axios from 'axios';
import { defineStore } from 'pinia';
import { useFetch } from '../composables/useFetch';

export const usePokemonStoreStore = defineStore('PokemonStore', {
	state: () => ({
		pokemons: [],
	}),
	getters: {},
	actions: {
		async getAllPokemon() {
			const { fetchData } = useFetch();
			try {
				const response = await axios.get(
					'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500'
				);
				// console.log(response.data.results);
				const subresults = response.data.results.map(
					(pokemonUrl) => pokemonUrl.url
				);
				// console.log(subresults);
				fetchData(subresults);
			} catch (error) {
				console.log(error);
			}
		},
		addToPokemons(pokemon) {
			this.pokemons.push(pokemon);
		},
	},
});
