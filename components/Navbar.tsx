'use client';

import { GlobalState } from '@/atoms/state';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import logo from '@/public/image/book-seva-logo.png';
import Link from 'next/link';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [state, setState] = useRecoilState(GlobalState);

	return (
		<div
			className={`absolute top-0 w-full bg-orange-500 z-[999] transform transition-transform duration-300 ${
				open ? '' : '-translate-y-full'
			}`}
		>
			<div className="flex flex-col items-center">
				<Link
					href={'https://bookseva.com/devotee-home-page'}
					target={'_blank'}
					className=" z-[99] my-3"
				>
					<Image
						src={logo}
						alt="book seva image"
						className="w-[200px] h-auto"
					/>
				</Link>
			</div>
			{/* <div className="mt-4 flex flex-row justify-evenly w-full">
				<button
					onClick={() =>
						setState({ lord: 'Ganesh', sound: 'Ganesh' })
					}
				>
					<div className="w-20 aspect-square h-20 rounded-full bg-gray-300"></div>
					<div>Ganesh</div>
				</button>
				<button
					onClick={() =>
						setState({ lord: 'Vishnu', sound: 'Vishnu' })
					}
				>
					<div className="w-20 aspect-square h-20 rounded-full bg-gray-300"></div>
					<div>Vishnu</div>
				</button>
				<button
					onClick={() =>
						setState({ lord: 'Lakshmi', sound: 'Lakshmi' })
					}
				>
					<div className="w-20 aspect-square h-20 rounded-full bg-gray-300"></div>
					<div>Lakshmi</div>
				</button>
				<button onClick={() => setState({ lord: 'Ram', sound: 'Ram' })}>
					<div className="w-20 aspect-square h-20 rounded-full bg-gray-300"></div>
					<div>Ram</div>
				</button>
			</div> */}
			<div className="h-2 w-full translate-y-full bg-orange-500">
				<div className="flex items-center justify-center rotate-45">
					<button
						className={`h-9 w-9 z-50 rounded-br-lg -translate-y-4 flex items-center justify-center bg-orange-500`}
						onClick={() => {
							setOpen((ref) => !ref);
							console.log('clicked');
						}}
					>
						<MdArrowDropDown
							className={`transition-all translate-x-1 translate-y-1  duration-300 h-10 w-10 ${
								open ? 'rotate-[135deg]' : '-rotate-45'
							}`}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
