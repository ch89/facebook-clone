<template>
	<div id="app" class="antialiased text-gray-800 bg-fb-light-gray min-h-screen">
		<navbar></navbar>
		<div class="flex">
			<sidebar></sidebar>
			<div class="w-1/2">
				<router-view></router-view>
			</div>
			<contacts></contacts>
		</div>
	</div>
</template>

<script>
	import Navbar from "./components/Navbar"
	import Sidebar from "./components/Sidebar"
	import Contacts from "./components/Contacts"
	
	export default {
		components: { Navbar, Sidebar, Contacts }
	}
</script>