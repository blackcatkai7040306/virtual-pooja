'use client';

import { GlobalState } from '@/atoms/state';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import ram from '@/public/image/ram.jpg';
import { activePoojas, pooja } from '@/atoms/pooja';
import { useEffect } from 'react';
import raman from '@/public/image/raman.png';
import water from '@/public/image/middle-later.png';
import pot from '@/public/image/pot-icon.png';

export default function Home() {
	const [state, setState] = useRecoilState(activePoojas);
	// let abhishekam = true;

	return (
		<main className="relative h-screen xs:max-w-[500px] mx-auto">
			<Image
				src={ram}
				className="w-auto h-screen object-cover sm:object-contain"
				alt="Brower is not compatible with this kind of images"
				priority
				sizes=""
				fill
			/>

			{/* <div className="animate-abhishekam"> */}

			{/* </div> */}
			<div className="h-screen mx-auto w-full relative">
				{state.abhishekam ? (
					<div>
						<Image
							alt="water abhishekam"
							src={water}
							fill
							className={`w-auto h-screen object-cover sm:object-contain animate-abhishekam`}
							sizes=""
							priority
						/>
						<div className="w-screen h-screen object-cover sm:object-contain relative">
							<Image
								alt="water abhishekam"
								src={pot}
								className={`absolute top-[7%] left-1/2 animate z-[999] animate-pot`}
								sizes=""
								priority
							/>
						</div>
						<Image
							alt="whatever it is"
							src={raman}
							fill
							className="w-auto h-screen object-cover sm:object-contain"
							sizes=""
							priority
						/>
					</div>
				) : null}
				{state.archana ? (
					<Image
						alt="whatever it is"
						src={`https://pooja.bookseva.com/Assets/Archana/Image/giphy (12).gif`}
						fill
						className="relative bottom-10 h-screen max-w-[550px] w-full mx-auto"
						priority
					/>
				) : null}
				{state.doopam ? (
					<div className="relative max-w-[550px] h-screen w-full mx-auto object-contain">
						<Image
							alt="whatever it is"
							src={`https://pooja.bookseva.com/Assets/Doopam/image/giphy (7).gif`}
							height={125}
							width={125}
							className="absolute bottom-36 left-0"
							priority
						/>
						<Image
							alt="whatever it is"
							src={`https://pooja.bookseva.com/Assets/Doopam/image/giphy (7).gif`}
							height={125}
							width={125}
							className="absolute bottom-36 right-2"
							priority
						/>
					</div>
				) : null}
				{state.deepam ? (
					<Image
						alt="whatever it is"
						src={`https://pooja.bookseva.com/Assets/Deepam/image/deepam.gif`}
						height={75}
						width={75}
						className="absolute bottom-[30%] animate-traverse-circles-with-curves left-1/2"
						priority
					/>
				) : null}
				{/* <Image
					alt="whatever it is"
					src={`https://pooja.bookseva.com/Assets/Deepam/image/deepam.gif`}
					height={100}
					width={100}
					className="absolute bottom-[20%] left-1/2 -translate-[100px] animate-traverse-circles-with-curves"
					priority
				/> */}
			</div>
		</main>
	);
}
