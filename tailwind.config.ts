import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				primary: '#202020',
				secondary: '#2C2C2C',
				black01: '#2C2C2C',
				black10: '#D3D0CD',
				black20: '#B9B3AE',
				black30: '#9E968F',
				black40: '#827A71',
				black50: '#52575C',
				black60: '#44403C',
				black70: '#5E5E5E',
				black100: '#222222',
				green05: '#F4FDEC',
				green60: '#1B7929',
				red05: '#FFF3EB',
				red60: '#93182C',
				neutral: {
					'08': '#616161',
					100: '#202020',
					60: '#9E9E9E',
				},
			},
    },
  },
  plugins: [],
}
export default config
