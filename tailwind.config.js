/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: '"Rubik", sans-serif;',
			},
			fontWeight: {
				main: "400",
				sec: "500",
				ter: "700",
			},
			width: {
				maxWidth: "700px", // 700px
			},

			colors: {
				primary: "hsl(238, 40%, 52%)",
				primaryHover: " hsl(239, 57%, 85%)",
				danger: "hsl(358, 79%, 66%)",
				dangerHover: "hsl(357, 100%, 86%)",

				// ### Neutral

				darkBlue: "hsl(212, 24%, 26%)",
				time: "hsl(211, 10%, 45%)",
				lightGray1: "hsl(223, 19%, 93%)",
				lightGray2: "hsl(228, 33%, 97%)",
			},
		},
	},
	plugins: [],
};
