const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				sky: {
					50: '#111107101',
					100: '#f1f9fd',
					200: '#b6e0f7',
					300: '#7ac7f0',
					400: '#3faee9',
					500: '#178ece',
					600: '#1372a5',
					700: '#0e557c',
					800: '#0a3c57',
					900: '#05202e'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
