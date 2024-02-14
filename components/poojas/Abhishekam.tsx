'use client';

import { activePoojas } from '@/atoms/pooja';
import { soundAtom } from '@/atoms/sound';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import AudioPlayer from '@/components/AudioPlayer';
import { playAudioAndChangeState } from '@/lib/helpers';

const Abhishekam = () => {
	const [pooja, setPooja] = useRecoilState(activePoojas);
	const sound = useRecoilValue(soundAtom);
	const audioRef = useRef<HTMLAudioElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		// to stop the current audio if the selected pooja is not 'abhishekam'
		if (pooja !== 'abhishekam' && audioRef.current) {
			clearTimeout(timeoutRef.current!);
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
	}, [pooja]);

	const handlePlay = () => {
		clearTimeout(timeoutRef.current!);
		let timeoutId = playAudioAndChangeState({
			audioRef,
			value: 'abhishekam',
			changePoojaHandler: setPooja,
		});
		timeoutRef.current = timeoutId;
	};

	return (
		<button
			onClick={handlePlay}
			disabled={pooja === 'abhishekam'}
			className="absolute top-[8%] left-[29%] flex flex-col items-center"
		>
			<div className="rounded-full bg-white w-14 h-14 relative">
				<Image
					alt="Image is not supported"
					src="https://pooja.bookseva.com/Assets/Abhishekam/icon/abhishekamIcon.png"
					fill
					className="p-2"
				/>
			</div>
			<AudioPlayer
				src={'/audio/abhishekam.mp3'}
				muted={!sound.sound}
				audioRef={audioRef}
			/>
			<div className="text-sm font-semibold mt-1 text-white">
				Abhishekam
			</div>
		</button>
	);
};

export default Abhishekam;
