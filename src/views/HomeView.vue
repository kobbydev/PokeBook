<script setup>
import Logo from '@/assets/images/logo.png';
import SearchIcon from '@/assets/icons/search.svg';
import { usePokemonStoreStore } from '../stores/PokemonStore';
import { useThemeStoreStore } from '../stores/ThemeStore';
import { storeToRefs } from 'pinia';
// import { onBeforeMount } from 'vue';
const { getAllPokemon } = usePokemonStoreStore();
const { selectedTheme } = storeToRefs(useThemeStoreStore());

getAllPokemon();

// if (!localStorage.pokeTheme) localStorage.setItem('pokeTheme', 'yellow');
</script>

<template>
	<div class="home">
		<main>
			<figure class="logo">
				<img :src="Logo" alt="" />
			</figure>
			<h1 class="title text-lg font-clash font-semibold">
				Poke<span :class="'text-' + selectedTheme">book</span>
			</h1>
			<p class="sub-text text-sm">
				Largest Pokémon index with information about every Pokemon you can think
				of.
			</p>
			<div
				class="search-box border-10 border-solid"
				:class="'border-' + selectedTheme"
			>
				<input
					type="text"
					class="search-input"
					placeholder="Enter Pokemon name"
				/>
				<figure class="search-icon flex" :class="'bg-' + selectedTheme">
					<img :src="SearchIcon" alt="" />
				</figure>
			</div>
			<!-- <p class="view-all text-sm underline font-general">View all</p> -->
			<router-link
				:to="{ name: 'ListView' }"
				class="view-all text-sm underline font-general"
				>View all</router-link
			>
		</main>
	</div>
</template>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	main {
		width: calc(100% - 48px);
		max-width: 600px;
	}
}

.search-box {
	// border: 10px solid #e85382;
	// border-radius: 60px;
	position: relative;
	z-index: 10;
	display: flex;
	margin-bottom: 16px;
	// width: calc(100% - 48px);
	// max-width: 536px;

	.search-icon {
		border-radius: 50%;
		max-width: 48px;
		width: 48px;
		aspect-ratio: 1;
		margin: 10px;
		cursor: pointer;

		svg {
			color: white;
		}

		img {
			width: 20px;
			aspect-ratio: 1;
			margin: 0 auto;
		}
	}
}

.sub-text {
	width: calc(100% - 48px);
	max-width: 370px;
	margin: 0 auto;
	margin-bottom: 46px;
}

.search-input {
	outline: none;
	border-radius: 60px;
	padding: 10px;
	width: 100%;
}

.search-input::placeholder {
	font-size: 18px;
	@media screen and (min-width: 820px) {
		font-size: 24px;
	}
}

.logo {
	width: calc(100% - 48px);
	max-width: 383px;
	margin: 0 auto;

	@media screen and (min-width: 820px) {
		width: 380px;
	}
}

.view-all {
	font-weight: 500;
	line-height: 24px;
	cursor: pointer;
	position: relative;
	z-index: 20;
}
</style>
