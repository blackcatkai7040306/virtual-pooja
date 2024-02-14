import { atom } from 'recoil';

export const pooja = atom<State>({
	key: 'pooja', // unique ID (with respect to other atoms/selectors)
	default: {
		gif: '',
		sound: '',
	},
});

export const activePoojas = atom<poojas>({
	key: 'activepooja',
	default: false,
});

export type State = {
	gif: string;
	sound: string;
};

export type poojas = 'abhishekam' | 'archana' | 'deepam' | 'doopam' | false;
