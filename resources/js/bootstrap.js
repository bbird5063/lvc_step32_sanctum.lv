import 'bootstrap';
import router from './router';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.withCredentials = true; // ВСТАВИЛИ
axios.defaults.withXSRFToken = true; // Я ВСТАВИЛ, ПРОБА

window.axios.interceptors.response.use({}, err => { // ВСТАВИЛИ
	console.log(err.response); // {data: {…}, status: 401,...
	console.log(err.response.status); // {data: {…}, status: 401,...
	//console.log(err.status); // {data: {…}, status: 401,...
	if (err.response.status == 401 || err.response.status == 419) { // 419 - из документации
		const token = localStorage.getItem('x-xsrf-token');
		console.log(token);
		if (token) {
			localStorage.removeItem('x-xsrf-token');
		}
		router.push({name: 'user.login'});
	}
});


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
