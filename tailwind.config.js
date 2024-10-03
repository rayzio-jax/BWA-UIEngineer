/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				head: ["Montserrat", "sans-serif"],
				aside: ["Inter", "sans-serif"],
				sans: ["Poppins", "sans-serif"],
			},
			colors: {
				"btn-primary": "#7c3aed",
				"btn-hover": "#6d28d9",
				"btn-secondary": "#FFD15AFF",
				"btn-secondary-hover": "#EEC253FF",
			},
		},
	},
	plugins: [],
};
