import { Country } from './Country'
import { Restriction } from './Restriction'

const defaultRestriction: Restriction = {
  minLength: 11,
  maxLength: 11,
}

type CountryRestrictionsType = { [key in Country]: Restriction }

export const CountryRestrictions: CountryRestrictionsType = {
  [Country.EE]: defaultRestriction,
  [Country.GE]: defaultRestriction,
  [Country.KG]: defaultRestriction,
  [Country.KZ]: defaultRestriction,
  [Country.LT]: defaultRestriction,
  [Country.LV]: defaultRestriction,
  [Country.RU]: defaultRestriction,
  [Country.TJ]: defaultRestriction,
  [Country.TM]: defaultRestriction,
  [Country.UA]: defaultRestriction,
  [Country.US]: defaultRestriction,
  [Country.UZ]: defaultRestriction,
  [Country.CA]: defaultRestriction,
  [Country.BY]: defaultRestriction,
  [Country.AM]: defaultRestriction,
}
