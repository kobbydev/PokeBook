<script setup>
import { storeToRefs } from 'pinia';
import TheNavBar from '../components/TheNavBar.vue';
import { usePokemonStoreStore } from '../stores/PokemonStore';

const { pokemons } = storeToRefs(usePokemonStoreStore());
console.log('eruekaaa', pokemons);
</script>

<template>
	<TheNavBar />
</template>
