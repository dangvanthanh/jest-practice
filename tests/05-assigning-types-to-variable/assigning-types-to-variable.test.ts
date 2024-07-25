import { expect, it } from 'vitest';
import { type User, getUserId } from './assigning-types-to-variable';

const defaultUser: User = {
	id: 1,
	firstName: 'Thanh',
	lastName: 'Dang',
	isAdmin: false,
};

it('should get the user id', () => {
	expect(getUserId(defaultUser)).toBe(1);
});
