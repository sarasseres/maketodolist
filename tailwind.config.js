/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blueBold: '#12343b',
        lightBrown: '#f1af71',
        lightseaGreen: '#20b2aa',
        lightYellow: '#e2d029',
        bluesky: '#1D7AFC',
      },
    },
  },
  plugins: [],
};
