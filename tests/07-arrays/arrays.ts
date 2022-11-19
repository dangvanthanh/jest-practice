export type Role = 'user' | 'admin' | 'super admin';

export interface Post {
	id: number;
	title: string;
}

export interface User {
	id: number;
	name: string;
	role: Role;
	posts: Post[];
}

export function countPosts(user: User) {
	return user.posts.length;
}
