import { expect, it } from 'vitest'
import { makeUser } from './annotations'

it('Should return a valid user', () => {
	const user = makeUser()

	expect(user.id).toBeTypeOf('number')
	expect(user.firstName).toBeTypeOf('string')
	expect(user.lastName).toBeTypeOf('string')

	expect(user.posts[0].id).toBeTypeOf('number')
	expect(user.posts[0].title).toBeTypeOf('string')
})
