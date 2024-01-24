'use client';

import { GlobalState } from '@/atoms/state';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import ram from '@/public/image/ram.jpeg';
import { activePoojas, pooja } from '@/atoms/pooja';
import { useEffect } from 'react';

export default function Home() {
	const [state, setState] = useRecoilState(activePoojas);

	// useEffect(() => {
	// 	if (state.gif) {
	// 		setTimeout(
	// 			() => {
	// 				setState({ gif: '', sound: '' });
	// 			},
	// 			state.gif === 'Deepam' ? 15000 : 7000,
	// 		);
	// 	}
	// }, [state]);

	return (
		<main className="relative h-screen sm:w-[575px]  mx-auto p-6">
			<Image
				src={ram}
				className="aspect-[9/16] w-auto h-screen"
				alt="Brower is not compatible with this kind of images"
				priority
				sizes=""
				fill
			/>

			{state.abhishekam ? (
				<Image
					alt="whatever it is"
					src={`https://pooja.bookseva.com/Assets/Abhishekam/image/giphy (10).gif`}
					fill
					className="animate relative bottom-10"
					priority
				/>
			) : null}
			{state.archana ? (
				<Image
					alt="whatever it is"
					src={`https://pooja.bookseva.com/Assets/Archana/Image/giphy (12).gif`}
					fill
					className="animat relative bottom-10"
					priority
				/>
			) : null}
			{state.doopam ? (
				<Image
					alt="whatever it is"
					src={`https://pooja.bookseva.com/Assets/Doopam/image/giphy (8).gif`}
					fill
					className="animate relative bottom-10"
					priority
				/>
			) : null}
			{state.deepam ? (
				<Image
					alt="whatever it is"
					src={`https://pooja.bookseva.com/Assets/Deepam/image/deepam.gif`}
					height={200}
					width={200}
					className="absolute bottom-[40%] animate-traverse-circles-with-curves left-1/3"
					priority
				/>
			) : null}
			{/* <Image
				alt="whatever it is"
				src={`https://pooja.bookseva.com/Assets/Deepam/image/deepam.gif`}
				height={200}
				width={200}
				className="absolute bottom-[40%] animate-traverse-circles-with-curves left-1/3"
				priority
			/> */}
		</main>
	);
}
