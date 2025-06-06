/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      colors: {
        primary: {
          400: '#ff9143',
        },
        secondary: {
          100: '#fff',
          200: '#969595',
          300: '#696969',
          400: '#262a2c',
          700: '#1a1a1a',
          900: '#131313',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      padding: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
} 