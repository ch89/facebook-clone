<template>
	<!-- <div class="w-1/2 grid grid-cols-5 gap-4 items-start"> -->
	<div class="w-1/2">
		<div class="flex items-start gap-4 my-4">
			<story v-for="story in stories" :key="story.id" :story="story"></story>
		</div>
		<message-sender></message-sender>
		<post></post>
	</div>
</template>

<script>
	import Story from "./Story"
	import MessageSender from "./MessageSender"
	import Post from "./Post"

	export default {
		components: { Story, MessageSender, Post },
		data() {
			return {
				stories: [
					{ id: 1, image: "/images/food1.jpg", avatar: "/images/avatar1.jpg", title: "Ludde" },
					{ id: 2, image: "/images/food2.jpg", avatar: "/images/avatar2.jpg", title: "Kalle" },
					{ id: 3, image: "/images/food3.jpg", avatar: "/images/avatar3.jpg", title: "Lina" },
					{ id: 4, image: "/images/food4.jpg", avatar: "/images/avatar4.jpg", title: "Pelle" },
					{ id: 5, image: "/images/food5.jpg", avatar: "/images/avatar2.jpg", title: "Nisse" }
				]
			}
		}
	}
</script>