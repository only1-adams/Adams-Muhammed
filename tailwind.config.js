/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1D143A",
				secondary: "#BE95C4",
				customWhite: "#E0E1DD",
			},
			fontFamily: {
				custom: " 'Bricolage Grotesque', sans-serif",
				unbounded: "'Unbounded', sans-serif",
			},
			backgroundImage: {
				customGradient:
					"linear-gradient(180deg, #BAA9F2 0%, rgba(44, 40, 57, 0.00) 100%)",
			},
		},
	},
	plugins: [],
};
