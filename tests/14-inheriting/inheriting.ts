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

export interface Comment extends Base {
	comment: string
}
