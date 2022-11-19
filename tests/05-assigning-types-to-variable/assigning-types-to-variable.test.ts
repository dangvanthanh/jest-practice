import {User, getUserId} from './assigning-types-to-variable'

const defaultUser: User = {
  id: 1,
  firstName: 'Thanh',
  lastName: 'Dang',
  isAdmin: false
}

test('should get the user id', () => {
  expect(getUserId(defaultUser)).toBe(1)
})