'use client';

import { activePoojas } from '@/atoms/pooja';
import { soundAtom } from '@/atoms/sound';
import Image from 'next/image';
import React, { createRef, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import AudioPlayer from '@/components/AudioPlayer';

const Abhishekam = () => {
	const [pooja, setPooja] = useRecoilState(activePoojas);
	const sound = useRecoilValue(soundAtom);
	const audioRef = useRef<HTMLAudioElement>(null);

	const handlePlay = () => {
		setPooja((ref) => ({
			...ref,
			abhishekam: true,
		}));

		if (audioRef.current) {
			audioRef.current.play();
		}
		console.log('audioref of abhishekam => ', audioRef.current);

		const abhishekam = setTimeout(() => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
			setPooja((ref) => ({
				...ref,
				abhishekam: false,
			}));
		}, 7000);
		return () => clearTimeout(abhishekam);
	};

	return (
		<button
			onClick={handlePlay}
			disabled={pooja.abhishekam}
			className="absolute top-[7%] right-[61%] flex flex-col items-center"
		>
			<div className="rounded-full bg-white w-16 h-16 relative">
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
			<div>Abhishekam</div>
		</button>
	);
};

export default Abhishekam;
