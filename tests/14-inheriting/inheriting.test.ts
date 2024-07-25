import { expect, it } from 'vitest'
import type { Post, User } from './inheriting'

it('Should return object of user', () => {
	const user: User = {
		id: '1',
		firstName: 'Thanh',
		lastName: 'Dang',
	}

	expect(user.id).toBe('1')
})

it('Should return object of blog', () => {
	const post: Post = {
		id: '2',
		title: 'Plain English',
		body: 'Plain English is the simple...',
	}

	expect(post.id).toBe('2')
})
