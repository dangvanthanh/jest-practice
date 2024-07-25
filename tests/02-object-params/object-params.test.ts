import { expect, it } from 'vitest'
import { sum } from './object-params'

it('Add 3 and 5, the two numbers together', () => {
	expect(sum({ first: 3, second: 5 })).toBe(8)
})

it('Add 7 and 12, the two numbers together', () => {
	expect(sum({ first: 7, second: 12 })).toBe(19)
})
