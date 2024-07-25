export type State = 'fail' | 'succeed'

export function tryCatchDemo(state: State) {
	try {
		if (state === 'fail') {
			throw new Error('Failure!')
		}
	} catch (e) {
		return (e as Error).message
	}
}
