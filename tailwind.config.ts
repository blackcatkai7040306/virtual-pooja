import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				background:
					'url(https://pooja.bookseva.com/static/media/bg.7447bb186671f091d9de.jpg)',
			},
			keyframes: {
				traverseCircles: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%)',
					},
					'25%': {
						transform: 'translate(50%, -50%)',
					},
					'50%': {
						transform: 'translate(50%, 50%)',
					},
					'75%': {
						transform: 'translate(-50%, 50%)',
					},
				},
				traverseCirclesWithCurves: {
					'0%': {
						transform:
							'rotate(0deg)translate(0px,170px)rotate(0deg)',
					},
					'25%': {
						transform:
							'rotate(90deg)translate(0px,170px)rotate(-90deg)',
					},
					'50%': {
						transform:
							'rotate(180deg)translate(0px,170px)rotate(-180deg)',
					},
					'75%': {
						transform:
							'rotate(270deg)translate(0px,170px)rotate(-270deg)',
					},
					'100%': {
						transform:
							'rotate(360deg)translate(0px,170px)rotate(-360deg)',
					},
				},
				water: {
					'0%': {
						transform: 'translate(-100vh)',
					},
					'100%': {
						transform: 'translate(100vh)',
					},
				},
				pot: {
					'0%': {
						transform: 'rotate(20deg)',
						opacity: '0',
					},
					'5%': {
						opacity: '1',
					},
					'20%': {
						transform: 'rotate(-10deg)',
					},
					'50%': {
						transform: 'rotate(-10deg)',
					},
					'60%': {
						transform: 'rotate(20deg)',
						opacity: '1',
					},
					'70%': {
						opacity: '0',
					},
					'100%': {
						opacity: '0',
					},
				},
				abhishekam: {
					'0%': {
						top: '-100vh',
					},
					'100%': {
						top: '100vh',
					},
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' },
				},
			},
			animation: {
				'traverse-circles': 'traverseCircles 4s linear infinite',
				'traverse-circles-delayed':
					'traverseCircles 4s linear infinite 1s',
				'traverse-circles-further-delayed':
					'traverseCircles 4s linear infinite 2s',

				'traverse-circles-with-curves':
					'traverseCirclesWithCurves 5s linear infinite',
				'traverse-circles-with-curves-delayed':
					'traverseCirclesWithCurves 5s linear infinite 1s',
				'traverse-circles-with-curves-further-delayed':
					'traverseCirclesWithCurves 5s linear infinite 2s',
				wiggle: 'wiggle 1.85s ease-in-out infinite',
				abhishekam: 'abhishekam 7s ease-in-out infinite',
				pot: 'pot 7s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
export default config;
