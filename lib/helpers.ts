import { poojas } from '@/atoms/pooja';
import { RefObject } from 'react';
import { SetterOrUpdater } from 'recoil';

export const playAudioAndChangeState = ({
	audioRef,
	value,
	changePoojaHandler,
}: {
	audioRef: RefObject<HTMLAudioElement>;
	value: poojas;
	changePoojaHandler: SetterOrUpdater<poojas>;
}): NodeJS.Timeout | null => {
	changePoojaHandler(value);
	if (audioRef.current) {
		audioRef.current.play();
	}

	let timeoutId = setTimeout(
		() => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
			changePoojaHandler(false);
		},
		value === 'deepam' ? 15000 : 7000,
	);
	return timeoutId;
};
