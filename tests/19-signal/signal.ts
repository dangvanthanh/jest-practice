type Subscriber<T> = (value: T) => void

let effectCallback: Subscriber<unknown> | null = null

export class Signal<T> {
	private value: T
	private subscribers: Subscriber<T>[]

	constructor(value: T) {
		this.value = value
		this.subscribers = []
	}

	getValue(): T {
		return this.value
	}

	setValue(newValue: T): void {
		this.value = newValue
		this.emit()
	}

	emit(): void {
		this.subscribers.forEach((subscriber, _) => subscriber(this.value))
	}

	subscribe(callback: Subscriber<T>): void {
		this.subscribers.push(callback)
	}
}

export const createSignal = <T>(value: T): [() => T, (newVal: T) => void] => {
	const signal = new Signal<T>(value)

	return [
		function getValue(): T {
			if (effectCallback) {
				signal.subscribe(effectCallback)
			}
			return signal.getValue()
		},
		function setValue(newVal: T): void {
			signal.setValue(newVal)
		},
	]
}

export const createEffect = (callback: () => void): void => {
	effectCallback = callback
	callback()
	effectCallback = null
}
