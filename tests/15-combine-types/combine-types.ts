export interface Base {
	id: string
}

export interface User extends Base {
	firstName: string
	lastName: string
}

export interface Post extends Base {
	title: string
	body: string
}

export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
	return {
		id: '1',
		firstName: 'Thanh',
		lastName: 'Dang',
		posts: [
			{
				id: '2',
				title: 'How I eat so much cheese',
				body: 'It is pretty edam difficult',
			},
		],
	}
}
