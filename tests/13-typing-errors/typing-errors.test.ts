import { expect, it } from 'vitest'
import { tryCatchDemo } from './typing-errors'

it('Should return the message when it fail', () => {
	expect(tryCatchDemo('fail')).toEqual('Failure!')
})
