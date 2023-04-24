/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	safelist: [
		'text-pink',
		'text-blue',
		'text-yellow',
		'border-pink',
		'border-blue',
		'border-yellow',
	],
	theme: {
		extend: {},
		colors: {
			pink: '#E85382',
			blue: '#39BADF',
			yellow: '#E1A725',
			grey: {
				100: '#7B7B7B',
			},
			white: {
				DEFAULT: '#FFFFFF',
				100: '#EEEEEE',
				200: '##F1F1F1',
				300: '#E1E1E1',
			},
			black: {
				100: '#101010',
			},
		},
		screens: {
			tablet: '768px',
			// => @media (min-width: 640px) { ... }
			// 'md': '768px',
			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		fontSize: {
			lg: ['48px'],
			sm: ['18px'],
			m: ['24px'],
		},
		fontFamily: {
			clash: ['"Clash Display"'],
			general: ['"General Sans"'],
		},
		borderColor: {
			pink: '#E85382',
			blue: '#39BADF',
			yellow: '#E1A725',
			grey: {
				100: '#7B7B7B',
			},
			white: {
				DEFAULT: '#FFFFFF',
				100: '#EEEEEE',
				200: '##F1F1F1',
				300: '#E1E1E1',
			},
			black: {
				100: '#101010',
			},
		},
	},
	plugins: [],
};
