import { Howl } from '@/generated-types/types';
import { atom } from 'recoil';

export const pooja = atom<State>({
	key: 'pooja', // unique ID (with respect to other atoms/selectors)
	default: {
		gif: '',
		sound: '',
	}, // default value (aka initial value)
});

export const activePoojas = atom<Poojas>({
	key: 'activepooja',
	default: {
		abhishekam: false,
		archana: false,
		doopam: false,
		deepam: false,
	},
});

type State = {
	gif: string;
	sound: string;
};

type Poojas = {
	abhishekam: boolean;
	archana: boolean;
	doopam: boolean;
	deepam: boolean;
};
