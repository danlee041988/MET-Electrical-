/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Colors extracted from the MET Electrical logo
          blue: '#2DD4BF',      // Bright turquoise/cyan from bottom leaf
          green: '#4AE54A',     // Bright green from middle leaf  
          amber: '#D4A574',     // Golden amber from top leaf
          yellow: '#D4A574',    // Alias for amber (for existing code compatibility)
          dark: '#0b1b2b',      // Keep existing dark background
          gray: '#9CA3AF',      // For secondary text elements
          
          // Accent variations for better design flexibility
          'blue-light': '#7DD3FC',   // Lighter blue for hover states
          'green-light': '#86EFAC',  // Lighter green for backgrounds
          'amber-light': '#FCD34D',  // Lighter amber for highlights
        },
      },
    },
  },
  plugins: [],
};

