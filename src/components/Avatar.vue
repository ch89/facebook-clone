<template>
	<img :src="src" alt="" class="w-12 rounded-full mr-4">
</template>

<script>
	export default {
		props: {
			src: {
				default: "/images/avatar2.jpg"
			}
		}
	}
</script>