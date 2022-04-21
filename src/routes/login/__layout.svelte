<script lang="ts" context="module">
	export async function load({ session, url }) {
		const { authenticated = false } = session?.auth ?? {};

		if (authenticated && url.pathname === '/login') {
			return { status: 302, redirect: '/' };
		}

		if (authenticated || url.pathname === '/login') {
			return {};
		}

		return { status: 302, redirect: '/login' };
	}
</script>

<slot />
