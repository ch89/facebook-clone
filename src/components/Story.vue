<template>
	<a href="#" class="block shadow-md rounded-lg overflow-hidden transition duration-500 transform hover:scale-105">
		<img :src="story.image" alt="Image" class="h-64 object-cover">
		<div class="absolute top-0 p-4 w-full h-full flex flex-col justify-between">
			<img :src="story.avatar" alt="Avatar" class="w-12 rounded-full border-4 border-fb-blue">
			<h3 class="text-white font-bold" v-text="story.title"></h3>
		</div>
	</a>
</template>

<script>
	export default {
		props: ["story"]
	}
</script>