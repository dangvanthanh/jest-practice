import { getName } from './properties-as-optional';

test('should work with just the first name', () => {
	const name = getName({
		firstName: 'Thanh',
	});

	expect(name).toBe('Thanh');
});

test('should work with the first name and last name', () => {
	const name = getName({
		firstName: 'Thanh',
		lastName: 'Dang',
	});

	expect(name).toBe('Thanh Dang');
});
