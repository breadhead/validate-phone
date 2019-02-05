import { Country } from '../Country'
import { isValid } from '../isValid'

describe('isValid', () => {
  test('should return true on correct RU number', () => {
    expect(isValid('79994955033', [Country.RU])).toBeTruthy()
  })

  test('should return false on incorrect RU number', () => {
    expect(isValid('7999495503', [Country.RU])).toBeFalsy()
    expect(isValid('78994955033', [Country.RU])).toBeFalsy()
  })
})
