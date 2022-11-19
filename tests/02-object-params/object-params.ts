type Params = {
	first: number;
	second: number;
};

export function sum(params: Params) {
	return params.first + params.second;
}
