<template>
	<div class="w-25">
		<input v-model="name" type="text" class="form-control mt-3 mb-3" placeholder="name">
		<input v-model="email" type="email" class="form-control mb-3" placeholder="email">
		<!--@error('email')
		<div class="text-danger">{{ $message }}</div>
		@enderror ЭТО НЕ 'blade.php' НЕ РАБОТАЕТ-->

		<input v-model="password" type="password" class="form-control mb-3" placeholder="password">
		<input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="confirm password">
		<input @click.prevent="register" type="submit" value="register" class="btn btn-primary">
		<div @v-if="error" class="text-danger">{{ error }}</div>
	</div>
</template>

<script>
import { getCookie } from '../functionGetCookie'; // добавили
export default {
	name: 'Registration',
	data() {
		return {
			name: null,
			email: null,
			password: null,
			password_confirmation: null,
			error: null,
		}
	},

	methods: {
		register() {
			axios.get('/sanctum/csrf-cookie') // здесь не бывает '.catch(error...'
				.then(response => {
					axios.post('/register', {
						name: this.name,
						email: this.email,
						password: this.password,
						password_confirmation: this.password_confirmation
					})
						.then(res => {
							console.log(res); // там нет res.config.headers['X-XSRF-TOKEN']
							console.log(getCookie('XSRF-TOKEN'));
							localStorage.setItem('x-xsrf-token', getCookie('XSRF-TOKEN'));
							this.$router.push({ name: 'user.personal' });
						})
						.catch(error => {  // я сам добавил
							console.log(error);
							this.error = `${error.response.status}  ${error.response.data.message}`;
						})
				})
		}

	},
}
</script>

<style scoped></style>
