/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./src/components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./src/domain/**/*.{vue,ts,js}",
		"./domain/**/*.{vue,ts,js}",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		fontFamily: {
			sans: ["Open Sans", "ui-sans-serif"],
			serif: ["Open Sans", "ui-serif"],
			mono: ["Open Sans", "ui-monospace"],
		},
		extend: {
			spacing: {
				13: "3.25rem",
				14.5: "3.625rem",
				15: "3.75rem",
			},
			gridTemplateColumns: {
				footer: "minmax(0, 21.875rem) auto minmax(0, 21.875rem)",
			},
			padding: {
				4.5: "1.125rem",
			},
			screens: {
				"2xl": "1520px",
			},
			height: {
				95: "23.75rem",
			},
			minHeight: {
				"available-screen": "calc(100vh - 46.125rem)",
			},
			maxHeight: {
				95: "23.75rem",
			},
			boxShadow: {
				normal: "0px 10px 30px rgba(72, 72, 72, 0.1)",
				product: "0px 10px 30px rgba(182, 199, 209, 0.2)",
				"normal-hover": "0px 10px 30px rgba(72, 72, 72, 0.18)",
			},
			borderRadius: {
				xx: "0.625rem",
				2.5: "1.25rem",
				3.5: "1.75rem",
				3.75: "2rem",
			},
			textColor: "#161616",
			lineHeight: "1.75rem",
			colors: {
				primary: {
					yellow: "#FFD540",
					blue: "#157EB9",
				},
				secondary: {
					yellow: "#FFE381",
					blue: "#DFF1FF",
					lightBlue: "#F1F9FF",
				},
				gray: {
					900: "#161616",
					800: "#787C87",
					700: "#B3B5BB",
					600: "#EAEAEA",
					500: "#F7F7F7",
					400: "#B3B5BB",
					300: "#FEFFFF",
				},
				system: {
					danger: "#FC4E4E",
					success: "#6FD18B",
					warning: "#FAA746",
				},
				additional: {
					blue: "#4162D7",
					purple: "#D741BF",
					lightBlue: "#59B4E7",
					green: "#97C079",
					lightPurple: "#E967B5",
				},
			},
		},
	},
	plugins: [],
};
