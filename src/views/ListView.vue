<script setup>
import { storeToRefs } from 'pinia';
import TheNavBar from '../components/TheNavBar.vue';
import Cards from '../components/Cards.vue';
import { usePokemonStoreStore } from '../stores/PokemonStore';
import BlueGif from '@/assets/gifs/blue-poke.gif';

const { pokemons, loading } = storeToRefs(usePokemonStoreStore());
const { getAllPokemon } = usePokemonStoreStore();

getAllPokemon();
console.log('eruekaaa', pokemons);
</script>

<template>
	<TheNavBar />
	<div class="loading-states" v-if="loading">
		<img :src="BlueGif" alt="pkoemons loading">
	</div>
	<div class="cards" v-if="pokemons.length > 0">
		<Cards :cards="pokemons" />
	</div>
</template>

<style lang="scss" scoped>
.cards {
	width: calc(100% - 48px);
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 288px 288px 288px 288px;
	gap: 16px;
	margin-top: 102px;
}
</style>
