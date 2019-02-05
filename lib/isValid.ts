import { Country } from './Country'
import { CountryRestrictions } from './CountryRestrictions'
import { satisfyRestriction } from './satisfyRestriction'

export const isValid = (phone: string, countries: Country[]): boolean =>
  Object.entries(CountryRestrictions)
    .filter(([country, _]) => countries.includes(country as Country))
    .map(([_, restriction]) => restriction)
    .every(satisfyRestriction(phone))
