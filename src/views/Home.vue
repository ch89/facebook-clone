<template>
	<!-- <div class="w-1/2 grid grid-cols-5 gap-4 items-start"> -->
	<div>
		<div class="flex items-start gap-4 my-4">
			<story v-for="story in stories" :key="story.id" :story="story"></story>
		</div>
		<message-sender></message-sender>
		<post v-for="post in posts" :key="post.id" :post="post"></post>
	</div>
</template>

<script>
	import Story from "../components/Story"
	import MessageSender from "../components/MessageSender"
	import Post from "../components/Post"
	import db from "../firebase"

	export default {
		components: { Story, MessageSender, Post },
		created() {
			db.collection("posts").onSnapshot(snapshot => {
				this.posts = snapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() }
				})
			})
		},
		data() {
			return {
				posts: [],
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