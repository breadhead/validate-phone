import { Country } from '../Country'

import { defineCountry } from '../defineCountry'

describe('defineCountry', () => {
  test('for RU number return RU and KZ', () => {
    const countries = defineCountry('79994955033')

    expect(countries).toHaveLength(2)
    expect(countries).toContain(Country.RU)
    expect(countries).toContain(Country.KZ)
  })

  test('for US number return US and CA', () => {
    const countries = defineCountry('12025550105')

    expect(countries).toHaveLength(2)
    expect(countries).toContain(Country.US)
    expect(countries).toContain(Country.CA)
  })
})
