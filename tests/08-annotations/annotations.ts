export interface Post {
	id: number
	title: string
}

export interface User {
	id: number
	firstName: string
	lastName: string
	role: 'admin' | 'user' | 'super-admin'
	posts: Array<Post>
}

export const makeUser = (): User => {
	return {
		id: 1,
		firstName: 'Thanh',
		lastName: 'Dang',
		role: 'admin',
		posts: [
			{
				id: 1,
				title: 'How I eat so much cheese',
			},
		],
	}
}
