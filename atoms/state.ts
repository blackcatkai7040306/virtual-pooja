import { atom } from 'recoil';

export const GlobalState = atom<State>({
	key: 'globalState', // unique ID (with respect to other atoms/selectors)
	default: {
		lord: '',
		sound: '',
	}, // default value (aka initial value)
});

type State = {
	lord: string;
	sound: string;
};
