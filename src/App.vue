<template>
	<div id="app" class="antialiased text-gray-800 bg-fb-light-gray h-screen">
		<navbar></navbar>
		<div class="flex">
			<sidebar></sidebar>
			<feed></feed>
		</div>
	</div>
</template>

<script>
	import Navbar from "./components/Navbar"
	import Sidebar from "./components/Sidebar"
	import Feed from "./components/Feed"
	
	export default {
		components: { Navbar, Sidebar, Feed }
	}
</script>