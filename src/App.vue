<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BgNoise from '@/assets/images/noise.png';
</script>

<template>
	<div class="main-body">
		<figure class="bg-image">
			<img :src="BgNoise" alt="background noise" />
		</figure>
		<RouterView />
	</div>
</template>

<style scoped>
.main-body{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.bg-image {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
}

.bg-image img {
	object-fit: fill;
	width: 100%;
	height: 100vh;
}
</style>
