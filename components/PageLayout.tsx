'use client';

import { soundAtom } from '@/atoms/sound';
import { GlobalState } from '@/atoms/state';
import useSound from 'use-sound';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activePoojas } from '@/atoms/pooja';
// import '../public/audio/Ganesh.mp3';

const PageLayout = ({ children }: { children: ReactNode }) => {
	const [isSound, setIsSound] = useState(true);
	const [play, { pause, sound: howl }] = useSound('/audio/ram.mp3');

	const [sound, setSound] = useRecoilState(soundAtom);

	const toggleMute = () => {
		setSound((ref) => {
			return {
				sound: !ref.sound,
				backgroundSound: false,
			};
		});
	};

	useEffect(() => {
		if (sound.backgroundSound === true) {
			howl.loop(true);
			play();
		} else {
			pause();
		}
	}, [sound.backgroundSound]);

	return (
		<div className="flex-1 w-full min-h-screen">
			<div className="absolute z-10 left-2 top-5 flex flex-col space-y-3">
				<button
					onClick={() => {
						toggleMute();

						console.log('clicked');
					}}
				>
					{sound.sound ? (
						<HiSpeakerWave className="h-6 fill-orange-500 w-6" />
					) : (
						<HiSpeakerXMark className="h-6 fill-orange-500 w-6" />
					)}
				</button>
				<button
					onClick={() => {
						if (sound.sound) {
							setSound((ref) => {
								return {
									...ref,
									backgroundSound: !ref.backgroundSound,
								};
							});
						}
						console.log('clicked');
					}}
				>
					{sound.backgroundSound ? (
						<HiSpeakerWave className="h-6 fill-orange-500 w-6" />
					) : (
						<HiSpeakerXMark className="h-6 fill-orange-500 w-6" />
					)}
				</button>
			</div>
			<div className="absolute z-10 right-2 top-5 flex flex-col space-y-3">
				<button
					onClick={() => {
						setIsSound((ref) => !ref);
						console.log('clicked');
					}}
				>
					{isSound ? (
						<HiSpeakerWave className="h-6 fill-orange-500 w-6" />
					) : (
						<HiSpeakerXMark className="h-6 fill-orange-500 w-6" />
					)}
				</button>
			</div>
			<div className="max-w-screen w-full mx-auto bg-background h-full">
				{children}
			</div>
		</div>
	);
};

export default PageLayout;
