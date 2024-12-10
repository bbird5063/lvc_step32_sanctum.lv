<template>
	<div>
		<router-link class="me-1" :to="{ name: 'get.index' }">Get </router-link>
		<router-link class="me-1" :to="{ name: 'user.login' }">Login </router-link>
		<router-link class="me-1" :to="{ name: 'user.personal' }">Personal </router-link>
		<router-link class="me-1" :to="{ name: 'user.registration' }">Registration </router-link>
		<a @click.prevent="logout" href="#">Logout</a>
		<div v-if="error" class="text-danger">{{ error }}</div> <!--я сам воткнул на всякий случай-->
		<router-view :key="$route.fullPath"></router-view>
	</div>
</template>

<script>
export default {
	name: 'Index',

	data() {
		return {
			error: null, // Все error(Login, Registration, Index) я сам воткнул
		}
	},

	methods: {
		logout() {
			//axios.get('/sanctum/csrf-cookie').then(response => { // при logout проверка не нужна

				axios.post('/logout')
					.then(res => {
						console.log(res);
						localStorage.removeItem('x-xsrf-token');
						this.$router.push({name: 'user.login'});
					})
					.catch(error => { // я сам воткнул на всякий случай
						console.log(error.response.data.message);
						//this.error = error.response.data.message;
					})

			//});

		},
	}

}
</script>

<style scoped></style>
