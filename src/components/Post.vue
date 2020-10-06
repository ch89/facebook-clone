<template>
	<div class="bg-white shadow-md rounded-lg mt-4">
		<div class="p-4">
			<div class="flex items-center mb-4">
				<avatar :src="post.avatar"></avatar>
				<div>
					<span class="block font-bold">{{ post.name }}</span>
					<span class="block text-sm text-gray-600">2 hours ago</span>
				</div>
				<a href="#" class="text-fb-gray ml-auto">
					<i class="fas fa-ellipsis-h text-xl"></i>
				</a>
			</div>
			<p>{{ post.message }}</p>
		</div>
		<img v-if="post.image" :src="post.image" alt="Image" class="w-full">
		<div class="flex justify-evenly text-fb-gray">
			<a href="#" class="p-4">
				<i class="fas fa-thumbs-up mr-2"></i>
				<span>Like</span>
			</a>
			<a href="#" class="p-4">
				<i class="fas fa-comment mr-2"></i>
				<span>Comment</span>
			</a>
			<a href="#" class="p-4">
				<i class="fas fa-share mr-2"></i>
				<span>Share</span>
			</a>
			<a href="#" class="p-4">
				<i class="fas fa-user-circle mr-2"></i>
				<i class="fas fa-angle-down"></i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["post"]
	}
</script>