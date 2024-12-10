export function getCookie(name) {
	let cookie = document.cookie.split('; ').find(row => row.startsWith(name + '='));
	cookie =  cookie ? cookie.split('=')[1] : null;
	cookie =  cookie ? cookie.slice(0, cookie.length-3) + '=' : null;
	return cookie;
}
