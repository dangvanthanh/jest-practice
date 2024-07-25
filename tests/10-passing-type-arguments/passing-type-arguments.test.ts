import { expect, it } from 'vitest'
import { guitarPaddySun, guitarSunghaJung } from './passing-type-arguments'

const guitarists = new Set<string>()

guitarists.add(guitarPaddySun)
guitarists.add(guitarSunghaJung)

it('Should contain Paddy Sun and Sungha Jung', () => {
	expect(guitarists.has(guitarPaddySun)).toEqual(true)
	expect(guitarists.has(guitarSunghaJung)).toEqual(true)
})

it('Should give a type error when you try to pass a non-string', () => {
	guitarists.add('Ran')
})
