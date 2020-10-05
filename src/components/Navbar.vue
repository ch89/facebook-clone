<template>
	<nav class="flex sticky top-0 z-10 bg-white shadow-md p-4">
		<div class="flex w-1/4">
			<a href="#" class="text-fb-blue mr-4">
				<i class="fab fa-facebook text-5xl"></i>
			</a>
			<div class="flex items-center bg-gray-200 rounded-full px-4 py-2">
				<i class="fas fa-search text-fb-gray mr-2"></i>
				<input type="text" placeholder="Search Facebook" class="bg-transparent focus:outline-none">
			</div>
		</div>
		<div class="flex justify-between text-2xl text-fb-gray w-1/2">
			<a href="#" class="flex items-center px-6 border-b-4 border-fb-blue hover:border-b-0 hover:rounded-lg hover:text-fb-blue hover:bg-gray-200">
				<i class="fas fa-home"></i>
			</a>
			<a href="#" class="flex items-center px-6 hover:rounded-lg hover:text-fb-blue hover:bg-gray-200">
				<i class="fas fa-flag"></i>
			</a>
			<a href="#" class="flex items-center px-6 hover:rounded-lg hover:text-fb-blue hover:bg-gray-200">
				<i class="fab fa-youtube"></i>
			</a>
			<a href="#" class="flex items-center px-6 hover:rounded-lg hover:text-fb-blue hover:bg-gray-200">
				<i class="fas fa-store"></i>
			</a>
			<a href="#" class="flex items-center px-6 hover:rounded-lg hover:text-fb-blue hover:bg-gray-200">
				<i class="fas fa-user-circle"></i>
			</a>
		</div>
		<div class="flex justify-end items-center w-1/4">
			<div class="flex items-center">
				<img src="/images/avatar2.jpg" alt="" class="w-12 rounded-full mr-4">
				<span class="font-bold">Ludde</span>
			</div>
			<div class="text-fb-gray">
				<a href="#" class="px-4">
					<i class="fas fa-plus"></i>
				</a>
				<a href="#" class="px-4">
					<i class="fas fa-comment"></i>
				</a>
				<a href="#" class="px-4">
					<i class="fas fa-bell"></i>
				</a>
				<a href="#" class="px-4">
					<i class="fas fa-angle-down"></i>
				</a>
			</div>
		</div>
	</nav>
</template>