<script setup>
import EyeIcon from '@/assets/icons/view-icon.svg';
import { defineProps, ref } from 'vue';
import { useThemeStoreStore } from '../stores/ThemeStore';
import { storeToRefs } from 'pinia';

const props = defineProps({
	cards: Array,
});

const { selectedTheme } = storeToRefs(useThemeStoreStore());

const hover = ref(false);
const cardId = ref(null);

function onHover(id) {
	hover.value = true;
	cardId.value = id;
	// console.log(id);
}
function onLeaveHover(id) {
	hover.value = false;
	cardId.value = null;
}

const pokeTypes = {
	normal: '🐙',
	fighting: '🤺',
	flying: '🦋',
	poison: '☠️',
	ground: '🕳',
	rock: '🪨',
	bug: '🐞',
	ghost: '👻',
	steel: '🔩',
	fire: '🔥',
	water: '💦',
	grass: '🌿',
	electric: '⚡️',
	psychic: '🔮',
	ice: '🧊',
	dragon: '🐲',
	dark: '⚫️',
	fairy: '🧚🏽',
	unknown: '❓',
	shadow: '👤',
};
</script>

<template>
	<div
		class="card bg-white z-20 inline-block w-[288px] p-[10px] rounded-[20px] text-center mb-[67px]"
		:class="{ cardHover: hover && cardId === card.id }"
		v-for="card in cards.slice(0, 10)"
		:key="card.id"
		@mouseover="onHover(card.id)"
		@mouseleave="onLeaveHover(card.id)"
	>
		<figure
			class="bg-white-200 w-[268px] flex justify-center rounded-[15px] h-[148px] relative"
		>
			<img :src="card.imageUrl" alt="image of pokemon" class="poke-image" />
		</figure>
		<p class="poke-name mt-[20px] mb-[8px] font-clash text-m font-[500]">
			{{ card.name }}
		</p>
		<div
			class="poke-types flex justify-center items-center gap-[10px] mb-[13px]"
		>
			<p
				class="type bg-white-200 py-[4px] px-[12px] rounded-[40px]"
				v-for="types in card.types"
				:key="types"
			>
				<span>{{ pokeTypes[types] }}</span> {{ types }}
			</p>
		</div>
		<div
			class="view-poke px-[10px] py-[13px] mt-[30px] bg-white rounded-b-[20px] rounded-t-none"
			:style="cardId === card.id ? 'display: block' : 'display: none'"
		>
			<button
				class="view-button rounded-[14px] px-[20px] py-[12px] flex justify-between items-center w-full z-30"
                :class="'bg-' + selectedTheme"
			>
				<p class="text-white font-general">View Pokemon</p>
				<img :src="EyeIcon" alt="view icon" />
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.poke-image {
	position: relative;
	top: -54px;
	width: 191px;
	height: 187px;
}

.cardHover {
	position: relative;
	/* border-bottom: 0; */
	/* padding-bottom: 100px; */
	z-index: 30;
}

.view-poke {
	// background-color: yellow;
    width: 100%;
	position: absolute;
    bottom: -67px;
	left: 0;
	margin: 0;
	// z-index: 30;
	// width: 200px;
	/* border: 3px solid red; */
	// border: 0 1px 1px 1px;
	// border-style: solid;
	// border-color: red;
}
</style>
