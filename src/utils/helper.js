// import axios from 'axios';
// import { usePokemonStoreStore } from '../stores/PokemonStore';

// export function fetchData(urls) {
// 	return Promise.all(
// 		urls.map((url) => {
// 			return axios
// 				.get(url)
// 				.then(function (response) {
// 					console.log('response', response.data);
// 					return {
// 						success: true,
// 						data: response.data,
// 					};
// 				})
// 				.catch(function (error) {
// 					return { success: false };
// 				});
// 		})
// 	);
// }

export class Pokemon {
	constructor(abilities, types, stats) {
		this.abilities = abilities;
		this.types = types;
		this.stats = stats;
	}

	getAbilities() {
		return this.abilities.map((element) => element.ability.name);
	}

	getStats() {
		return this.stats.map((element) => {
			return {
				name: element.stat.name,
				stat: element.base_stat,
			};
		});
	}

	getTypes() {
		return this.types.map((element) => element.type.name);
	}
}
