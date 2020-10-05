<template>
	<div class="bg-white shadow-md rounded-lg">
		<div class="flex border-b p-4">
			<avatar></avatar>
			<form @submit.prevent="add" class="flex-1 flex">
				<input class="bg-gray-200 rounded-full flex-1 px-4 py-2 mr-4 focus:outline-none" placeholder="What's on your mind?">
				<input class="bg-gray-200 rounded-full px-4 py-2 focus:outline-none" placeholder="Image URL (Optional)">
				<button class="hidden">Add</button>
			</form>
		</div>
		<div class="flex justify-evenly">
			<a href="#" class="p-4">
				<i class="fas fa-video text-red-500 mr-2"></i>
				<span>Live Video</span>
			</a>
			<a href="#" class="p-4">
				<i class="fas fa-camera text-green-500 mr-2"></i>
				<span>Photo/Video</span>
			</a>
			<a href="#" class="p-4">
				<i class="fas fa-smile text-yellow-500 mr-2"></i>
				<span>Feeling</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			add() {
				console.log("add post")
			}
		}
	}
</script>