import { expect, it } from 'vitest'
import { createThenGetUser } from './typing-async-functions'

it('Should create the user, then get them', async () => {
	const user = await createThenGetUser(
		async () => '1',
		async (id) => ({
			id,
			firstName: 'Thanh',
			lastName: 'Dang',
		}),
	)

	expect(user).toEqual({
		id: '1',
		firstName: 'Thanh',
		lastName: 'Dang',
	})
})
