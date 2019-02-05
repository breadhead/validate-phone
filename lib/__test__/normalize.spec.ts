import { normalize } from '../normalize'

describe('normalize', () => {
  test('should remove all non-numbers chars', () => {
    expect(normalize('01abs-(12) 434')).toBe('0112434')
  })

  test('should not corrupt normalized number', () => {
    expect(normalize('0112434')).toBe('0112434')
  })
})
