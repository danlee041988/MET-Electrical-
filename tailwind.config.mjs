/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Professional electrical cable colors for clean, professional look
          blue: '#1E3A8A',      // Deep blue (neutral wire) - professional and trustworthy
          green: '#22C55E',     // Safety green (earth wire) - safety and reliability
          amber: '#F59E0B',     // Warning amber - attention and energy
          yellow: '#F59E0B',    // Alias for amber (for existing code compatibility)
          brown: '#8B4513',     // Brown (live wire) - warm and dependable
          gray: '#6B7280',      // Professional gray - clean and modern
          dark: '#1F2937',      // Professional dark - clean background
          
          // Light variations for better design flexibility
          'blue-light': '#3B82F6',   // Lighter blue for hover states
          'green-light': '#4ADE80',  // Lighter green for backgrounds  
          'amber-light': '#FCD34D',  // Lighter amber for highlights
          'gray-light': '#9CA3AF',   // Lighter gray for secondary elements
        },
      },
    },
  },
  plugins: [],
};

