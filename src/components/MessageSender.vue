<template>
	<div class="bg-white shadow-md rounded-lg" v-if="user">
		<div class="flex border-b p-4">
			<avatar :src="user.photoURL"></avatar>
			<form @submit.prevent="add" class="flex-1 flex">
				<input class="bg-gray-200 rounded-full flex-1 px-4 py-2 mr-4 focus:outline-none" :placeholder="`What's on your mind, ${user.displayName}?`" v-model="form.message">
				<input class="bg-gray-200 rounded-full px-4 py-2 focus:outline-none" placeholder="Image URL (Optional)" v-model="form.image">
				<button class="hidden">Add</button>
			</form>
		</div>
		<div class="flex justify-evenly">
			<a href="#" class="flex items-center p-4">
				<i class="fas fa-video text-red-500 text-xl mr-2"></i>
				<span class="text-fb-gray">Live Video</span>
			</a>
			<a href="#" class="flex items-center p-4">
				<i class="fas fa-camera text-green-500 text-xl mr-2"></i>
				<span class="text-fb-gray">Photo/Video</span>
			</a>
			<a href="#" class="flex items-center p-4">
				<i class="fas fa-smile text-yellow-500 text-xl mr-2"></i>
				<span class="text-fb-gray">Feeling</span>
			</a>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex"
	import db from "../firebase"

	export default {
		computed: mapState("auth", ["user"]),
		data() {
			return {
				form: {}
			}
		},
		methods: {
			add() {
				this.form.name = this.user.displayName
				this.form.avatar = this.user.photoURL

				db.collection("posts").add(this.form)
					.then(() => this.form = {})
			}
		}
	}
</script>