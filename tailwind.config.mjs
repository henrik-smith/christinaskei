/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1A1A1A',
        'bg-light': '#FAFAF8',
        'text-primary': '#1A1A1A',
        'text-light': '#F5F5F0',
        'text-secondary': '#6B6B6B',
        'accent': '#C4956A',
        'accent-hover': '#D4A57A',
        'accent-dark': '#A07850',
        'success': '#28A745',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.7' }],
      },
      letterSpacing: {
        heading: '-0.02em',
      },
      borderRadius: {
        card: '24px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
