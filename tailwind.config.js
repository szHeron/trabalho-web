/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'linear-background': 'linear-gradient(to right, #56ccf2, #2f80ed);'
      },
    },
  },
  plugins: [],
}
