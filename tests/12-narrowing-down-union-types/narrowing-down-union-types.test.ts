import { expect, it } from 'vitest';
import { coerceAmount } from './narrowing-down-union-types';

it('Should return the amount when passed an object', () => {
	expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed an number', () => {
	expect(coerceAmount(20)).toEqual(20);
});
