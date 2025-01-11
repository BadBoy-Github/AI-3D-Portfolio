/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      backgroundSize: {
        'gradient-xy': '400% 400%',
      },
    },
  },
  plugins: [],
};