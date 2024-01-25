'use client';

import { activePoojas } from '@/atoms/pooja';
import { soundAtom } from '@/atoms/sound';
import Image from 'next/image';
import React, { createRef, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import AudioPlayer from '@/components/AudioPlayer';

const Deepam = () => {
	const [pooja, setPooja] = useRecoilState(activePoojas);
	const sound = useRecoilValue(soundAtom);
	const audioRef = useRef<HTMLAudioElement>(null);

	const handlePlay = () => {
		setPooja((ref) => ({ ...ref, deepam: true }));

		if (audioRef.current) {
			audioRef.current.play();
		}
		console.log('audioref of Deepam => ', audioRef.current);

		const deepam = setTimeout(() => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
			setPooja((ref) => ({ ...ref, deepam: false }));
		}, 15000);

		return () => clearTimeout(deepam);
	};

	return (
		<button
			onClick={handlePlay}
			disabled={pooja.deepam}
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
