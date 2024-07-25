import { expect, it } from 'vitest'
import { fetchLukeSkywalker } from './promises-and-async'

it('Should return a LukeSkywalker', async () => {
	const user = await fetchLukeSkywalker()

	expect(user.name).toBe('Luke Skywalker')
	expect(user.height).toBe('172')
	expect(user.mass).toBe('77')
})
