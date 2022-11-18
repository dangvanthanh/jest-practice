type Params = {
	first: number;
	second: number;
};

function sum(params: Params) {
	return params.first + params.second;
}

export { sum };
