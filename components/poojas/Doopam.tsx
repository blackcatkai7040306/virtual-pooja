'use client';

import { activePoojas, pooja } from '@/atoms/pooja';
import { soundAtom } from '@/atoms/sound';
import Image from 'next/image';
import React, { createRef, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import AudioPlayer from '@/components/AudioPlayer';

const Doopam = () => {
	const [pooja, setPooja] = useRecoilState(activePoojas);
	const sound = useRecoilValue(soundAtom);
	const audioRef = useRef<HTMLAudioElement>(null);

	const handlePlay = () => {
		setPooja((ref) => ({ ...ref, doopam: true }));

		if (audioRef.current) {
			audioRef.current.play();
		}
		console.log('audioref of Doopam => ', audioRef.current);

		const doopam = setTimeout(() => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
			setPooja((ref) => ({ ...ref, doopam: false }));
		}, 7000);

		return () => clearTimeout(doopam);
	};

	return (
		<button
			onClick={handlePlay}
			disabled={pooja.doopam}
			className="absolute top-[2%] left-[52%] flex flex-col items-center"
		>
			<div className="rounded-full bg-white w-14 h-14 relative">
				<Image
					alt="Image is not supported"
					src="https://pooja.bookseva.com/Assets/Doopam/icon/doopamIcon.png"
					fill
					className="p-2"
				/>
			</div>
			<AudioPlayer
				src={'/audio/doopam.mp3'}
				muted={!sound.sound}
				audioRef={audioRef}
			/>
			<div className="text-sm font-semibold mt-1 text-white">Doopam</div>
		</button>
	);
};

export default Doopam;
