/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        royal: {
          100: '#06040e',
          200: '#0c071d',
          300: '#120b2b',
          400: '#160e34',
          500: '#1a103c',
          600: '#2d1a5f',
          700: '#3f2582',
          800: '#5231a5',
          900: '#643dc8',
        },
        crimson: {
          100: '#0a0202',
          200: '#140404',
          300: '#1e0606',
          400: '#280707',
          500: '#2d0808',
          600: '#4d0d0d',
          700: '#6d1313',
          800: '#8d1818',
          900: '#ad1e1e',
        },
        red: {
          100: '#400000',
          200: '#800000',
          300: '#bf0000',
          400: '#ff0000',
          500: '#ff4d4d',
          600: '#ff6666',
          700: '#ff8080',
          800: '#ff9999',
          900: '#ffb3b3',
        },
        deep: {
          100: '#08060f',
          200: '#100b1f',
          300: '#17112e',
          400: '#1f1544',
          500: '#2d1a5f',
          600: '#3b1f7a',
          700: '#482495',
          800: '#5629b0',
          900: '#642ecb',
        },
      },
      backgroundImage: {
        // Gradients
        'gradient-primary': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-button': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-text': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'primary-from': '#1a103c',
        'primary-to': '#2d0808',
        'card-from': '#1f1544',
        'card-to': '#2d0808',
        'button-from': '#ff4d4d',
        'button-to': '#ff1a1a',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
