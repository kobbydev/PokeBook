<script setup>
// import { ref } from 'vue';
import { useLocalStorage } from '../composables/useLocalStorage';
const emit = defineEmits(['closeModal']);
const { pokeTheme, changeTheme } = useLocalStorage();

console.log(pokeTheme);

// const pokeTheme = ref(localStorage.getItem('pokeTheme'));

// function close() {
// 	emit('closeModal');
// }

// function changeTheme(color) {
// 	pokeTheme.value = color;
// 	localStorage.pokeTheme = pokeTheme.value;
// 	// localStorage.setItem('pokeTheme', color);
// }
</script>

<template>
	<div class="modal">
		<div class="modal-bg" @click="$emit('closeModal')"></div>
		<div class="theme-modal">
			<div class="heading">
				<p class="choose-theme text-m font-clash">Choose Theme</p>
			</div>
			<div class="themes">
				<div
					class="theme-pink"
					:style="[pokeTheme === 'pink' && { border: '1px solid #868686' }]"
				>
					<div
						class="theme-color-pink bg-pink"
						@click="changeTheme('pink')"
					></div>
				</div>
				<div
					class="theme-blue"
					:style="[pokeTheme === 'blue' && { border: '1px solid #868686' }]"
				>
					<div
						class="theme-color-blue bg-blue"
						@click="changeTheme('blue')"
					></div>
				</div>
				<div
					class="theme-yellow"
					:style="[pokeTheme === 'yellow' && { border: '1px solid #868686' }]"
				>
					<div
						class="theme-color-yellow bg-yellow"
						@click="changeTheme('yellow')"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.modal {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	.modal-bg {
		background: rgba(39, 39, 39, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 30;
	}

	.theme-modal {
		// display: grid;
		// place-items: center;
		background: #ebebeb;
		border-radius: 32px;
		width: calc(100% - 48px);
		max-width: 427px;
		z-index: 60;
		position: relative;
		top: 50%;
		margin: 0 auto;

		.heading {
			background: #ffffff;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
			border-radius: 32px 32px 0px 0px;
			text-align: center;

			.choose-theme {
				font-weight: 600;
				padding: 10px;
			}
		}
		.themes {
			padding: 20px;
			gap: 20px;
			display: flex;
			justify-content: center;
			align-items: center;

			@media screen and (min-width: 820px) {
				padding: 50px;
			}

			.theme-pink,
			.theme-blue,
			.theme-yellow {
				width: 88px;
				aspect-ratio: 1;
				border-radius: 50%;

				display: grid;
				place-items: center;
				z-index: 20;

				.theme-color-pink,
				.theme-color-blue,
				.theme-color-yellow {
					width: 74px;
					aspect-ratio: 1;
					border-radius: 50%;
					margin: 0 auto;
				}
			}
		}
	}
}
</style>
