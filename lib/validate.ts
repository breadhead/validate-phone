import { defineCountry } from './defineCountry'
import { isValid } from './isValid'
import { normalize } from './normalize'

export const validate = (phone: string) => {
  const normalizedPhone = normalize(phone)

  const countries = defineCountry(normalizedPhone)

  const valid = isValid(normalizedPhone, countries)

  return {
    countries,
    valid,
  }
}
