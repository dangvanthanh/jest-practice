import { expect, it } from 'vitest'
import type { UserOmitType, UserPickType } from './construct-types'

it('Should return user omit', () => {
	const userOmit: UserOmitType = {
		firstName: 'Thanh',
		lastName: 'Dang',
	}

	expect(userOmit.firstName).toEqual('Thanh')
	expect(userOmit.lastName).toEqual('Dang')
})

it('Should return user pick', () => {
	const userPick: UserPickType = {
		firstName: 'Thanh',
		lastName: 'Dang Van',
	}

	expect(userPick.firstName).toEqual('Thanh')
	expect(userPick.lastName).toEqual('Dang Van')
})
