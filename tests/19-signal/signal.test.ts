import { expect, it } from 'vitest';
import { Signal, createSignal } from './signal';

it('set value for signal', () => {
	const signal = new Signal<number>(42);
	signal.setValue(100);

	expect(signal.getValue()).toEqual(100);
});

it('equal value with createSignal', () => {
	const signal = new Signal<number>(42);
	signal.setValue(100);

	const [value, setValue] = createSignal<number>(42);
	setValue(100);

	expect(signal.getValue()).toEqual(value());
});
