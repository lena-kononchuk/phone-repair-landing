/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E31E24',
        secondary: '#1A1A1A',
        accent: '#FF4444',
        'brand-red': '#E2001A',
        gray: {
          light: '#F5F5F5',
          medium: '#9E9E9E',
          dark: '#424242',
        }
      },

      fontFamily: {
        sans: ['Gilroy', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      letterSpacing: {
        tighter: '-0.01em',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.16)',
        'card': '0px 8px 10px 0px rgba(255, 107, 0, 0.08)',
        'card-hover': '0px 50px 60px 0px rgba(255, 107, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
