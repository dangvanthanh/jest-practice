import { User, getUser } from './constraining-value-types';

const defaultUser: User = {
	name: 'Thanh',
	role: 'user',
};

const defaultAdmin: User = {
	name: 'Thanh',
	role: 'admin',
};

test('should get user is the admin', () => {
	expect(getUser(defaultUser)).toBe('Thanh is admin');
});
