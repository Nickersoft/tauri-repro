import cookie from 'cookie';

export async function handle({ event, event: { request }, resolve }) {
	return resolve(event);
}

export async function getSession({ request }) {
	const { auth } = cookie.parse(request?.headers?.get('cookie') ?? '');

	if (auth) {
		return {
			auth: {
				authenticated: true
			}
		};
	}

	return { auth: { authenticated: false } };
}
