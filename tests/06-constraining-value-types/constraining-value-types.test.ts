import { User, getUser } from './constraining-value-types';

const defaultUser: User = {
	name: 'Thanh',
	role: 'user',
};

const defaultAdmin: User = {
	name: 'Thanh',
	role: 'admin',
};

const defaultSuperAdmin: User = {
	name: 'Thanh',
	role: 'super admin',
};

test('should get user is the user', () => {
	expect(getUser(defaultUser)).toBe('Thanh is user');
});

test('should get user is the admin', () => {
	expect(getUser(defaultAdmin)).toBe('Thanh is admin');
});

test('should get user is the super admin', () => {
	expect(getUser(defaultSuperAdmin)).toBe('Thanh is super admin');
});
