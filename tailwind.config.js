const colors = require("tailwindcss/colors");

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	jit: true,
	theme: {
		extend: {
			colors: {
				// white: colors.white,
				// gray: colors.coolGray,
				// blue: colors.blue,
				// indigo: colors.indigo,
				// purple: colors.purple,
				violet: colors.violet,
				fuchsia: colors.fuchsia
			},
			minHeight: {
				0: "0",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
				screen: "100vh"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
