'use client';

import { pooja } from '@/atoms/pooja';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import Deepam from './poojas/Deepam';
import Doopam from './poojas/Doopam';
import Archana from './poojas/Archana';
import Abhishekam from './poojas/Abhishekam';

const Footer = () => {
	const [open, setOpen] = useState(true);
	const [state, setState] = useRecoilState(pooja);

	return (
		<div className="absolute bottom-0 w-full flex flex-col items-center justify-center">
			<div
				className={`bg-zinc-100 rounded-full translate-y-1/4 flex z-10 justify-center items-center w-24 h-24`}
				onClick={() => {
					setOpen((ref) => !ref);
					console.log(open);
				}}
			>
				<MdOutlineKeyboardArrowUp
					className={`transition -translate-y-1/2 fill-orange-500 h-10 w-10 ease-out ${
						open ? 'rotate-180' : ''
					}`}
				/>
			</div>
			<div className="relative w-full flex justify-center items-center">
				<div
					className={`absolute transition-all duration-200 w-[750px] h-[750px] ${
						open ? 'translate-y-1/4' : 'translate-y-2/4'
					} bg-orange-500/90 flex items-center justify-center gap-2 rounded-full`}
				>
					<div className="relative h-full w-full rounded-full">
						<Abhishekam />
						<Archana />
						<Doopam />
						<Deepam />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
