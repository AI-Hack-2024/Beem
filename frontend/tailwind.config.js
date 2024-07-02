/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      colors: {
        // to use colour, use either text-purple or bg-purple
        purple: '#5A1CDF',
        'off-white': '#FBFBF9',
        green: '#0C9D74',
        blue: '#0F68F6',
        pink: '#FF2369',
        footer: '#FCF9F2',
      },
      boxShadow: {
        card: '-0.125rem 0.25rem 0.625rem rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        custom: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('daisyui')],
};
