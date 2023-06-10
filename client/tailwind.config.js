/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme =>( {
        'home': "url('/background.jpg')",
        'levels': "url('/levels.jpg')",
        'level-one': "url('/level-one.jpg')",
      }),
    },
  },
  plugins: [],
}
