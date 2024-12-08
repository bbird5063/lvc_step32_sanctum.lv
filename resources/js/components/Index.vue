<template>
	<div>
		<router-link class="me-1" :to="{ name: 'get.index' }">Get </router-link>
		<router-link class="me-1" :to="{ name: 'user.login' }">Login </router-link>
		<router-link class="me-1" :to="{ name: 'user.registration' }">Registration </router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Index',
}
</script>

<style scoped></style>
