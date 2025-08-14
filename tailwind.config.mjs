/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0b5fff',
          yellow: '#ffd400',
          dark: '#0b1b2b',
        },
      },
    },
  },
  plugins: [],
};

