export interface User {
	id: number;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

export function getUserId(user: User) {
	return user.id;
}
