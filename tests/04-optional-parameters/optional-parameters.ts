export enum Gender {
	Male = 'male',
	Female = 'female',
}

export function getPokemon(name: string, gender?: Gender) {
	if (gender) {
		return `${name} is ${gender}`;
	}

	return name;
}
