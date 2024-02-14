'use client';

import { activePoojas } from '@/atoms/pooja';
import { soundAtom } from '@/atoms/sound';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import AudioPlayer from '@/components/AudioPlayer';
import { playAudioAndChangeState } from '@/lib/helpers';

const Deepam = () => {
	const [pooja, setPooja] = useRecoilState(activePoojas);
	const sound = useRecoilValue(soundAtom);
	const audioRef = useRef<HTMLAudioElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		// to stop the current audio if the selected pooja is not 'deepam'
		if (pooja !== 'deepam' && audioRef.current) {
			clearTimeout(timeoutRef.current!);
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
	}, [pooja]);

	const handlePlay = () => {
		clearTimeout(timeoutRef.current!);
		let timeoutId = playAudioAndChangeState({
			audioRef,
			value: 'deepam',
			changePoojaHandler: setPooja,
		});
		timeoutRef.current = timeoutId;
	};

	return (
		<button
			onClick={handlePlay}
			disabled={pooja === 'deepam'}
			className="absolute top-[8%] left-[61%] flex flex-col items-center"
		>
			<div className="rounded-full bg-white w-14 h-14 relative">
				<Image
					alt="Image is not supported"
					src="https://pooja.bookseva.com/Assets/Deepam/icon/light.png"
					fill
					className="p-2"
				/>
			</div>
			<AudioPlayer
				src={'/audio/deepam.mp3'}
				muted={!sound.sound}
				audioRef={audioRef}
			/>
			<div className="text-sm font-semibold mt-1 text-white">Deepam</div>
		</button>
	);
};

export default Deepam;
