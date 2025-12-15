import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				spc: {
					red: '#E30613',
					orange: '#FF4500',
					blue: '#1E90FF',
					navy: '#0F172A',
					gray: '#64748B',
				},
			},
		},
	},
	plugins: [],
};
export default config;