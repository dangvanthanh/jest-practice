import { sum, subtract, multiply, divide } from './types';

test('add 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('add 2 + 3 to equal 5', () => {
	expect(sum(2, 3)).toBe(5);
});

test('subtract 5 - 2 to equal 3', () => {
	expect(subtract(5, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
	expect(subtract(2, 1)).toBe(1);
});

test('multiply 1 * 2 to equal 2', () => {
	expect(multiply(1, 2)).toBe(2);
});

test('multiply 2 * 3 to equal 6', () => {
	expect(multiply(2, 3)).toBe(6);
});

test('divide 4 / 2 to equal 2', () => {
	expect(divide(4, 2)).toBe(2);
});

test('divide 6 / 0 to equal Infinity', () => {
	expect(divide(6, 0)).toBe(Infinity);
});
