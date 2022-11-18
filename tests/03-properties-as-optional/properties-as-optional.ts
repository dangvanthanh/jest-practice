type Params = {
	firstName: string;
	lastName?: string;
};

function getName(params: Params) {
	if (params.lastName) {
		return `${params.firstName} ${params.lastName}`;
	}

	return params.firstName;
}

export { getName };
