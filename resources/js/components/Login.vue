<template>
	<div class="w-25">
		<input v-model="email" type="email" class="form-control mt-3 mb-3" placeholder="email">
		<input v-model="password" type="password" class="form-control mb-3" placeholder="password">
		<input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
		<div v-if="error" class="text-danger">{{ error }}</div>
	</div>
</template>

<script>
import { getCookie } from '../functionGetCookie'; // добавили
export default {
	name: 'Login',
	data() {
		return {
			email: null,
			password: null,
			error: null,
		}
	},

	methods: {
		login() {
			axios.get('/sanctum/csrf-cookie').then(response => {

				axios.post('/login', { email: this.email, password: this.password })
					.then(res => {
						console.log(res.config.headers['X-XSRF-TOKEN']); // undefined
						console.log(getCookie('XSRF-TOKEN'));
						localStorage.setItem('x-xsrf-token', getCookie('XSRF-TOKEN'));
						this.$router.push({ name: 'user.personal' });

					})
					.catch(error => {
						console.log(error.response.data.message);
						this.error = `${error.response.status}  ${error.response.data.message}`;
					})
			});
		}
	},
}
</script>

<style scoped></style>