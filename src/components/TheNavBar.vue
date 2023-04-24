<script setup>
import Logo from '@/assets/images/logo.png';
import SearchIcon from '@/assets/icons/search.svg';
import TheThemeModal from './TheThemeModal.vue';
import { onMounted, onUpdated, ref } from 'vue';
// import { useLocalStorage } from '../composables/useLocalStorage';
// import { toRefs } from 'vue';
import { useThemeStoreStore } from '../stores/ThemeStore';
import { storeToRefs } from 'pinia';

const openThemeModal = ref(false);

// const { pokeTheme } = toRefs(useLocalStorage());
const lolo = localStorage.getItem('pokeTheme');
const { selectedTheme } = storeToRefs(useThemeStoreStore());

// console.log(pokeTheme);

function openModal() {
	openThemeModal.value = true;
}

function closeModal() {
	openThemeModal.value = false;
}
</script>

<template>
	<nav class="navbar flex bg-white">
		<div class="navbar-logo flex">
			<img :src="Logo" alt="" />
			<p class="navbar-logo-name font-clash text-m">
				Poke<span :class="'text-' + selectedTheme">book</span>
			</p>
		</div>
		<div class="navbar-search flex">
			<img :src="SearchIcon" alt="search" />
			<input type="text" placeholder="Enter pokemon name" />
		</div>
		<div class="theme-settings" @click="openModal">
			<div class="theme-color" :class="'bg-' + selectedTheme"></div>
		</div>
		<TheThemeModal v-if="openThemeModal" @close-modal="closeModal" />
	</nav>
</template>

<style lang="scss" scoped>
.navbar {
	box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
	padding: 10px 24px;
	gap: 10px;
	// width: calc(100% - 48px);
	// max-width: 100%;
	flex-direction: column;
	@media screen and (min-width: 820px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 17px 51px;
	}

	.navbar-logo {
		img {
			position: static;
			width: 80px;
			@media screen and (min-width: 820px) {
				position: absolute;
				top: 15px;
				width: 129px;
				height: 84px;
			}
		}

		.navbar-logo-name {
			// margin-left: 50px;
			font-weight: 600;
			line-height: 30px;
			@media screen and (min-width: 820px) {
				margin-left: 150px;
			}
		}
	}

	.navbar-search {
		background: #fcfcfc;
		border: 1px solid #e1e1e1;
		box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.05);
		border-radius: 30px;
		padding: 12px;
		z-index: 20;
		gap: 10px;
		width: calc(100% - 48px);
		max-width: 440px;

		input {
			outline: none;
			width: 100%;
		}
		svg {
			color: #dfdfdf;
			path {
				fill: #dfdfdf;
			}
		}
	}

	.theme-settings {
		width: 45px;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 1px solid #868686;
		display: grid;
		place-items: center;
		z-index: 20;
		position: absolute;
		right: 10px;

		@media screen and (min-width: 820px) {
			position: static;
		}

		.theme-color {
			width: 35px;
			aspect-ratio: 1;
			border-radius: 50%;
			margin: 0 auto;
		}
	}
}
</style>
