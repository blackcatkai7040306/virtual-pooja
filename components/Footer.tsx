'use client';

import { pooja } from '@/atoms/pooja';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import Abhishekam from './poojas/Abhishekam';
import Archana from './poojas/Archana';
import Doopam from './poojas/Doopam';
import Deepam from './poojas/Deepam';

const FooterCopy = () => {
	const [open, setOpen] = useState(true);
	const [state, setState] = useRecoilState(pooja);
	return (
		<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full">
			<div className="min-w-[750px] fixed bottom-0 left-1/2 -translate-x-1/2 h-[200px]">
				<div
					className={`transition-all duration-200 h-[750px] w-[750px] z-[100] ${
						open
							? 'translate-y-3/4 bg-zinc-100'
							: 'translate-y-0 bg-orange-500/90'
					}  rounded-full`}
				>
					<div className="relative h-full w-full rounded-full">
						<Abhishekam />
						<Archana />
						<Doopam />
						<Deepam />
					</div>
					<div
						className={`transition-all duration-200 h-[750px] w-[750px] z-[100] ${
							open
								? 'translate-y-3/4 bg-orange-500/90'
								: 'translate-y-0'
						}  rounded-full animate-ping`}
					></div>
				</div>
			</div>
			<div className="flex items-end z-[999] justify-center relative">
				<div
					className={`absolute bottom-0 bg-zinc-100 rounded-full translate-y-1/2 flex justify-center items-start w-24 h-24`}
					onClick={() => {
						setOpen((ref) => !ref);
						console.log(open);
					}}
				>
					<MdOutlineKeyboardArrowUp
						className={`transition translate-y-1/4 fill-orange-500 h-10 w-10 ease-out ${
							open ? 'rotate-180' : ''
						}`}
					/>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default FooterCopy;
