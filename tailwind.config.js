/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#6B7280',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F3F4F6',
          foreground: '#111827',
        },
      },
    },
  },
  plugins: [],
};