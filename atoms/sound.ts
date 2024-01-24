import { atom } from 'recoil';

export const soundAtom = atom<Sound>({
	key: 'sound',
	default: {
		sound: true,
		backgroundSound: false,
		bell: false,
	},
});

type Sound = {
	sound: boolean;
	backgroundSound: boolean;
	bell: boolean;
};
