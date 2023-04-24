<script setup>
import Logo from '@/assets/images/logo.png';
</script>

<template>
	<div class="home">
		<main>
			<figure class="logo">
				<img :src="Logo" alt="" />
			</figure>
			<h1 class="title text-lg font-clash font-semibold">
				Poke<span class="text-pink">book</span>
			</h1>
			<p class="sub-text text-sm">
				Largest Pokémon index with information about every Pokemon you can think
				of.
			</p>
			<div class="search-box">
				<input
					type="text"
					class="search-input"
					placeholder="Enter Pokemon name"
				/>
				<img src="" alt="" />
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
main {
	// width: 100%;
	// height: 100vh;
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
  // margin-top: 52px;

  // @media screen and (min-width: 820px) {
	// 	margin-top: 122px;
	// }
}

.search-box {
	border: 10px solid #e85382;
	border-radius: 60px;
	z-index: 10;
	display: flex;
	width: calc(100% - 48px);
	max-width: 536px;
}

.sub-text {
	width: calc(100% - 48px);
	max-width: 370px;
	margin-bottom: 46px;
}

.search-input {
	outline: none;
	border-radius: 60px;
	padding: 10px;
	width: 80%;
}

.search-input::placeholder {
	font-size: 18px;
	@media screen and (min-width: 820px) {
		font-size: 24px;
	}
}

.logo {
	width: calc(100% - 48px);
	max-width: 100%;
	margin: 0 auto;

	@media screen and (min-width: 820px) {
		width: 380px;
	}
}
</style>
