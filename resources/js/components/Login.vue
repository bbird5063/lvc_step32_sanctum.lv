<template>
	<div class="w-25">
		<input v-model="email" type="email" class="form-control mt-3 mb-3" placeholder="email">
		<input v-model="password" type="password" class="form-control mb-3" placeholder="password">
		<input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
		<div v-if="error" class="text-danger">{{ error }}</div>
	</div>
</template>

<script>
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
						console.log(res);
					})
					.catch(error => {
						console.log(error.response.data.message);
						this.error = error.response.data.message;
					})

			});

		}
	},
}
</script>

<style scoped></style>