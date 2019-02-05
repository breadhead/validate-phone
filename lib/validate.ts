import { defineCountry } from './defineCountry'
import { normalize } from './normalize'

export const validate = (phone: string) => {
  const normalizedPhone = normalize(phone)

  const countries = defineCountry(normalizedPhone)

  const valid = true // TODO: add real validation

  return {
    countries,
    valid,
  }
}
