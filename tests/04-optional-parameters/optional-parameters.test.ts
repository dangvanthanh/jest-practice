import { expect, it } from 'vitest'
import { Gender, getPokemon } from './optional-parameters'

it('should work with just the name', () => {
	expect(getPokemon('Bulbasaur')).toBe('Bulbasaur')
})

it('should work with just the name and gender is male', () => {
	expect(getPokemon('Charizard', Gender.Male)).toBe('Charizard is male')
})

it('should work with just the name and gender is female', () => {
	expect(getPokemon('Butterfree', Gender.Female)).toBe('Butterfree is female')
})
