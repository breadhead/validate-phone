import { Restriction } from './Restriction'

const satisfyLength = (phone: string, restrinction: Restriction): boolean =>
  phone.length >= restrinction.minLength &&
  phone.length <= restrinction.maxLength

const satisfyPrefix = (phone: string, restrinction: Restriction): boolean =>
  restrinction.startsWith.length > 0
    ? restrinction.startsWith.some(prefix => phone.startsWith(prefix))
    : true

export const satisfyRestriction = (phone: string) => (
  restrinction: Restriction,
): boolean =>
  satisfyLength(phone, restrinction) && satisfyPrefix(phone, restrinction)
