<script lang="ts">
	import Cookies from 'js-cookie';

	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	function login() {
		if (browser) {
			Cookies.set('auth', 'helloworld');
			$session = { ...$session, auth: { authenticated: true } };
			goto('/home', { replaceState: true });
		}
	}
</script>

<button on:click={login}>Login</button>
