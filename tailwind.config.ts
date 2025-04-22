  
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#2563eb', // кастомний синій
          secondary: '#f43f5e', // рожевий
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
    plugins: [],
  };