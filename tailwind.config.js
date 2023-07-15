/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      white: '#FFFFFF',
      pink: {
        100: '#fcf0f3',
        300: '#d5626d',
      },
      blue: {
        500: '#20376c',
        400: '#4678bc',
      },
      gray: {
        400: '#272727',
        300: '#514f50',
      },
    },
  },
}
