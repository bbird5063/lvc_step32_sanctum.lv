<template>
	<div>
		<div v-if="error" class="text-danger">{{ error }}</div>
		<div v-else>Get!</div>
	</div>
</template>

<script>
export default {
	name: 'Get',
	data() {
		return {
			error: null,
		}
	},

	mounted() {
		this.getData();
	},

	methods: {
		getData() {
			axios.get('/api/get')
				.then(res => {
					console.log(res);
				})
				.catch(error => {
					console.log(error.response.status);
					console.log(error.response.data.message);
					this.error = `${error.response.status}  ${error.response.data.message}`
				})
			
		}
	},
}
</script>

<style scoped></style>
