'use client';

import { activePoojas } from '@/atoms/pooja';
import { soundAtom } from '@/atoms/sound';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import AudioPlayer from '@/components/AudioPlayer';
import { playAudioAndChangeState } from '@/lib/helpers';

const Archana = () => {
	const [pooja, setPooja] = useRecoilState(activePoojas);
	const sound = useRecoilValue(soundAtom);
	const audioRef = useRef<HTMLAudioElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (pooja !== 'archana' && audioRef.current) {
			clearTimeout(timeoutRef.current!);
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
	}, [pooja]);

	const handlePlay = () => {
		clearTimeout(timeoutRef.current!);
		let timeoutId = playAudioAndChangeState({
			audioRef,
			value: 'archana',
			changePoojaHandler: setPooja,
		});
		timeoutRef.current = timeoutId;
	};

	return (
		<button
			onClick={handlePlay}
			disabled={pooja === 'archana'}
			className="absolute top-[2%] left-[41%] flex flex-col items-center"
		>
			<div className="rounded-full bg-white w-14 h-14 relative">
				<Image
					alt="Image is not supported"
					src="https://pooja.bookseva.com/Assets/Archana/icon/flowerIcon.png"
					fill
					className="p-2"
				/>
			</div>
			<AudioPlayer
				src={'/audio/archana.mp3'}
				muted={!sound.sound}
				audioRef={audioRef}
			/>
			<div className="text-sm font-semibold mt-1 text-white">Archana</div>
		</button>
	);
};

export default Archana;
