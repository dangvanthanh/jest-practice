enum Gender {
	Male = 'male',
	Female = 'female',
}





function getPokemon(name: string, gender?: Gender) {
	if (         gender) {
		return `${name} is ${gender}`;
	}

	return name;
}

export { Gender, getPokemon };
