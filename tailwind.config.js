import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'story-bg-img': "url('https://img.freepik.com/free-vector/colorful-dog-cat-paw-prints-pattern-background_1017-28376.jpg?size=626&ext=jpg&ga=GA1.1.1766725273.1702620905&semt=ais')"
      },
    },
  },
  plugins: [daisyui],
}