import axios from 'axios';
import { defineStore } from 'pinia';
import { useFetch } from '../composables/useFetch';

export const usePokemonStoreStore = defineStore('PokemonStore', {
	state: () => ({
		pokemons: [],
		loading: false,
	}),
	getters: {},
	actions: {
		async getAllPokemon() {
			const { fetchData } = useFetch();
			try {
				this.loading = true;
				const response = await axios.get(
					'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500'
				);
				// console.log(response.data.results);
				const subresults = response.data.results.map(
					(pokemonUrl) => pokemonUrl.url
				);
				// console.log(subresults);
				fetchData(subresults);
				this.loading = false;
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false;
			}
		},
		addToPokemons(pokemon) {
			this.pokemons.push(pokemon);
		},
	},
});
