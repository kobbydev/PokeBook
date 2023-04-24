import { defineStore } from 'pinia';

export const useThemeStoreStore = defineStore('ThemeStore', {
	state: () => {
		return {
			selectedTheme: localStorage.getItem('pokeTheme'),
		};
	},
	actions: {
		setTheme(value) {
			this.selectedTheme = value;
			console.log(this.selectedTheme);
		},
	},
});
