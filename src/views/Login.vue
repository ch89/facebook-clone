<template>
	<div>
		<button @click="login">Login</button>
	</div>
</template>

<script>
	import { auth, provider } from "../firebase"

	export default {
		methods: {
			login() {
				auth.signInWithPopup(provider)
					.then(response => {
						this.$store.commit("auth/set", response.user)

						this.$router.push("/")
					})
					.catch(error => console.log(error.message))
			}
		}
	}
</script>
