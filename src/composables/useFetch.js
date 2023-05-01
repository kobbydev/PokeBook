import axios from 'axios';
import { usePokemonStoreStore } from '../stores/PokemonStore';
import { Pokemon } from '../utils/helper';

export function useFetch() {
	const { addToPokemons } = usePokemonStoreStore();
	function fetchData(urls) {
		return Promise.all(
			urls.map((url) => {
				return axios
					.get(url)
					.then(function (response) {
						const newPokemonAbilites = new Pokemon(
							response.data.abilities,
							response.data.types,
							response.data.stats
						).getAbilities();
						const newPokemonStats = new Pokemon(
							response.data.abilities,
							response.data.types,
							response.data.stats
						).getStats();
						const newPokemonTypes = new Pokemon(
							response.data.abilities,
							response.data.types,
							response.data.stats
						).getTypes();
						const newPokemon = {
							abilities: newPokemonAbilites,
							stats: newPokemonStats,
							types: newPokemonTypes,
							imageUrl: response.data.sprites.other.dream_world.front_default,
							name: response.data.name,
							height: response.data.height,
							weight: response.data.weight,
							id: response.data.id,
						};
						// console.log('resp', newPokemon);
						addToPokemons(newPokemon);
						return {
							success: true,
							data: response.data,
						};
					})
					.catch(function (error) {
						return { success: false };
					});
			})
		);
	}
	return { fetchData };
}
