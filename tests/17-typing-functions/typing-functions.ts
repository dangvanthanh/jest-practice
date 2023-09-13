export type FocusListener = (isFocused: boolean, isGreat: boolean) => void;

export const addListener = (onFocusChange: FocusListener) => {
	window.addEventListener('focus', () => {
		onFocusChange(true, true);
	});

	window.addEventListener('blur', () => {
		onFocusChange(false, false);
	});
};
