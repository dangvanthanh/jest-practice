export type Role = 'user' | 'admin' | 'super admin';

export interface User {
	name: string;
	role: 'user' | 'admin' | 'super admin';
}

export function getUser(user: User) {
	return `${user.name} is ${user.role}`;
}
