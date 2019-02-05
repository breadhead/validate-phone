import { Restriction } from './Restriction'

export const satisfyRestriction = (phone: string) => (
  restrinction: Restriction,
): boolean =>
  phone.length >= restrinction.minLength &&
  phone.length <= restrinction.maxLength
