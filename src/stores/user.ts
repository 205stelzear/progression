import type { User } from '$/@types/User';
import { writable } from 'svelte/store';

export const loading = writable(true);
export const user = writable<User | null>(null);

export async function init(): Promise<void> {
	// update store
	user.set(null);
	loading.set(false);
}

export async function signin(): Promise<void> {
	const userData: User = {
		firstname: 'Guillaume',
		lastname: 'Marcoux',
		username: 'banane',
	};

	//update store
	user.set(await userData);
}

export async function signout(): Promise<void> {
	// update store
	user.set(null);
}
