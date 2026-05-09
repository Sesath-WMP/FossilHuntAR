/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fossil-brown': '#3E2723',
        'fossil-dark': '#291b15',
        'fossil-light': '#8D6E63',
        'museum-wood': '#5D4037',
        'museum-wall': '#f4ebd8',
        'excavation-orange': '#FF8F00',
        'excavation-glow': '#FFB300',
        'cyan-glow': '#00E5FF',
        'cyan-dark': '#00B8D4',
        'stone-gray': '#78909C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
