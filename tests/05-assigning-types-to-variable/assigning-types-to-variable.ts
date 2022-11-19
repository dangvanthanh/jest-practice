interface User {
	id: number;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

function getUserId(user: User) {
	return user.id;
}

export { User, getUserId };
