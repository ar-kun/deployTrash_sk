/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 darkMode: 'class',
 theme: {
  container: {
   center: true,
   padding: '18px',
  },
  extend: {
   colors: {
    primary: '#8EC3B0',
    secondary: '#DEF5E5',
    third: '#C89853',
   },
   fontFamily: {
    primary: ['Crimson Text', 'serif'],
   },
  },
 },
 plugins: [],
};
