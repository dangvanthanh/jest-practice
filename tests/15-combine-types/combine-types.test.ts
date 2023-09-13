import { expect, it } from 'vitest';
import { getDefaultUserAndPosts } from './combine-types';

it('Should return first post', () => {
	const userAndPosts = getDefaultUserAndPosts();

	expect(userAndPosts.posts[0].id).toEqual('2');
});
