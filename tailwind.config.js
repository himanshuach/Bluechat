/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-chat': '#4F46E5',
        'gray-chat': '#F3F4F6',
      }
    },
  },
  plugins: [],
}

