import type { Handle } from '@sveltejs/kit';

function redirect(location: string, body?: string) {
    return new Response(body, {
        status: 303,
        headers: { location }
    });
}

const unProtectedRoutes: string[] = [
    '/login',
];

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    if (!session && !unProtectedRoutes.includes(event.url.pathname)) {
        return redirect('/login', 'No authenticated user.');
    }

    return resolve(event);
};