import {User, countPosts} from './arrays'

const defaultUser: User = {
  id: 1,
  name: 'Thanh Dang',
  role: 'user',
  posts: [
    {id: 1, title: 'awsd'},
    {id: 2, title: 'qwerty'}
  ]
}

test('count posts is 2', () => {
  expect(countPosts(defaultUser)).toBe(2)
})