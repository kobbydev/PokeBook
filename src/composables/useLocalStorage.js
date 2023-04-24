import { onUpdated, ref } from 'vue';
import { useThemeStoreStore } from '../stores/ThemeStore';

export function useLocalStorage() {
	const pokeTheme = ref(localStorage.getItem('pokeTheme'));
	const { setTheme } = useThemeStoreStore();

	function changeTheme(color) {
		pokeTheme.value = color;
		localStorage.setItem('pokeTheme', color);
		setTheme(pokeTheme.value);
		// console.log(pokeTheme.value);
	}

	return { pokeTheme, changeTheme };
}
