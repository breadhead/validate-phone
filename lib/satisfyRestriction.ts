import { Restriction } from './Restriction'

const satisfyLength = (phone: string, restrinction: Restriction): boolean =>
  phone.length >= restrinction.minLength &&
  phone.length <= restrinction.maxLength

const satisfyContent = (phone: string, restrinction: Restriction): boolean =>
  !!restrinction.startsWith ? phone.startsWith(restrinction.startsWith) : true

export const satisfyRestriction = (phone: string) => (
  restrinction: Restriction,
): boolean =>
  satisfyLength(phone, restrinction) && satisfyContent(phone, restrinction)
