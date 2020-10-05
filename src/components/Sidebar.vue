<template>
	<nav class="w-1/4">
		<a href="#" class="flex items-center rounded-lg p-4 hover:bg-gray-100">
			<img src="/images/avatar2.jpg" alt="Avatar" class="w-12 rounded-full mr-4">
			<span class="text-lg font-bold">Ludde</span>
		</a>
		<a href="#" v-for="(link, index) in links" :key="index" class="flex items-center rounded-lg p-4 hover:bg-gray-100">
			<i class="fa-fw text-2xl text-fb-blue mr-4" :class="link.icon"></i>
			<span class="text-lg font-bold" v-text="link.title"></span>
		</a>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				links: [
					{ icon: "fas fa-plus-square", title: "Information" },
					{ icon: "fas fa-flag", title: "Pages" },
					{ icon: "fas fa-user-friends", title: "Friends" },
					{ icon: "fab fa-facebook-messenger", title: "Messenger" },
					{ icon: "fas fa-store", title: "Marketplace" },
					{ icon: "fab fa-youtube", title: "Videos" },
					{ icon: "fas fa-angle-down", title: "Marketplace" }
				]
			}
		}
	}
</script>