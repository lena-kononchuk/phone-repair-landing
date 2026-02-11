/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main brand colors
        primary: {
          DEFAULT: '#005AAA',     // Main blue - rgba(0, 90, 170, 1)
          dark: '#276CAA',        // Dark blue - rgba(39, 108, 170, 1)
          light: '#015AA9',       // Light blue - rgba(1, 90, 169, 1)
          bright: '#3D8AFF',      // Bright blue - rgba(61, 138, 255, 1)
        },
        
        // Accent colors
        accent: {
          red: '#E2001A',         // Main red - rgba(226, 0, 26, 1)
          'red-bright': '#FC142F', // Bright red - rgba(252, 20, 47, 1)
          'red-light': 'rgba(226, 0, 26, 0.1)', // Red with opacity
          orange: '#FF6B00',      // Orange - rgba(255, 107, 0, 1)
          'orange-light': '#F8AF78', // Light orange - rgba(248, 175, 120, 1)
          'orange-lighter': '#F9B87C', // Lighter orange - rgba(249, 184, 124, 1)
          yellow: '#FFD66B',      // Yellow - rgba(255, 214, 107, 1)
          green: '#3DDC84',       // Green - rgba(61, 220, 132, 1)
        },
        
        // Neutral colors
        dark: {
          DEFAULT: '#13171D',     // Main dark - rgba(19, 23, 29, 1)
          gray: '#444444',        // Dark gray - rgba(68, 68, 68, 1)
          'gray-medium': '#646464', // Medium gray - rgba(100, 100, 100, 1)
          'gray-light': '#867E7E', // Light gray - rgba(134, 126, 126, 1)
        },
        
        light: {
          DEFAULT: '#FFFFFF',     // White
          gray: '#DCE0E2',        // Light gray - rgba(220, 224, 226, 1)
          'gray-soft': '#DADADA', // Soft gray - rgba(218, 218, 218, 1)
          'gray-lighter': '#E5E5E5', // Lighter gray - rgba(229, 229, 229, 1)
          blue: '#EBF3F8',        // Light blue
          'blue-soft': '#F4F9FC', // Soft blue - rgba(244, 249, 252, 1)
        },
      },
      
      backgroundImage: {
        // Gradients from design
        'radial-orange': 'radial-gradient(50% 50% at 50% 50%, #FF6B00 0%, rgba(255, 107, 0, 0) 100%)',
        'linear-blue': 'linear-gradient(180deg, #EBF3F8 0%, rgba(235, 243, 248, 0) 100%)',
        'conic-blue': 'conic-gradient(from 180deg at 50% 50%, #EEF3F8 0deg, rgba(238, 243, 248, 0) 360deg)',
        'conic-blue-rotated': 'conic-gradient(from 217.17deg at 50% 50%, #EEF3F8 0deg, rgba(238, 243, 248, 0) 360deg)',
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
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
      },
    },
  },
  plugins: [],
}
