import { createRouter, createWebHistory } from 'vue-router';
/** 
 * НЕ ЗАБЫТЬ 'npm install vue-router'
 * При изменений в роутерах routes\api.php, routes\web.php, router.js
 * php artisan route:cache
*/
const routes = [
	{
		path: '/get', component: () => import('./components/Get.vue'),
		name: 'get.index'
	},
	{
		path: '/user/login', component: () => import('./components/Login.vue'),
		name: 'user.login'
	},
	{
		path: '/user/registration', component: () => import('./components/Registration.vue'),
		name: 'user.registration'
	},
	{
		path: '/user/personal', component: () => import('./components/Personal.vue'),
		name: 'user.personal'
	},


	/* Если в адресной строке ввели страницу, которой нет */
	{
		path: '/:catchAll(.*)', component: () => import('./components/Get.vue'),
		name: '404' // от балды
	},
];

const router = new createRouter({ // работает с и без 'new'
	routes,
	history: createWebHistory(),
});

export default router;
