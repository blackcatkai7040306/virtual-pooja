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
						transform: 'rotate(0deg)translate(-120px)rotate(0deg)',
					},
					'100%': {
						transform:
							'rotate(360deg)translate(-120px)rotate(-360deg)',
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
			},
		},
	},
	plugins: [],
};
export default config;
