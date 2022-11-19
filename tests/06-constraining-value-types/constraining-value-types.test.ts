import { User, getUser } from './constraining-value-types';

const defaultUser: User = {
	name: 'Thanh',
	role: 'user',
};

test('should get user is the user', () => {
	expect(getUser(defaultUser)).toBe('Thanh is user');
});
