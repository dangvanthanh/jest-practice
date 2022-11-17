type ParamsArgs = {
	first: number;
	second: number;
};

function sum(params: ParamsArgs) {
	return params.first + params.second;
}

export { sum };
