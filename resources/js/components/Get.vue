<template>
	<div>
		<div v-if="error" class="text-danger">{{ error }}</div>
		<div v-else>Get!</div>
	</div>
</template>

<script>
//import { getCookie } from '../functionGetCookie' // тут не надо
export default {
	name: 'Get',
	data() {
		return {
			error: null, // я сам добавил
		}
	},

	mounted() {
		this.getData();
	},

	methods: {
		getData() {
			
			axios.get('/api/get')
				.then(res => {
					console.log(document.cookie);
					console.log(res);
					//console.log(res.config.headers['X-XSRF-TOKEN']); // нету
				})
				.catch(error => {
					//console.log(error.response.status);
					console.log(error.response.data.message);
					this.error = `${error.response.status}  ${error.response.data.message}`;
				})
			
		},
	},
}
</script>

<style scoped></style>
