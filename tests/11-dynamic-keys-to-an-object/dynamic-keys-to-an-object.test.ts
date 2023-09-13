import { expect, it } from 'vitest';
import { createCache } from './dynamic-keys-to-an-object';

it('Should add values to the cache', () => {
	const cache = createCache();

	cache.add('Luffy', 'Nami');
	// biome-ignore lint/complexity/useLiteralKeys: <explanation>
	expect(cache.cache['Luffy']).toEqual('Nami');
});

it('Should remove values to the cache', () => {
	const cache = createCache();

	cache.add('Luffy', 'Nami');
	cache.remove('Luffy');

	expect(cache['cache.Luffy']).toEqual(undefined);
});
