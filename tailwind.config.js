/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B14',
          900: '#0B1120', // Main reference background
          850: '#0F172A',
          800: '#131D31', // Card / elevated surface
          750: '#162238',
          700: '#1E293B', // Subtle border
          600: '#2A3B53',
          500: '#3E526F',
        },
        electric: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        slate: {
          850: '#172033',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -4px rgba(59, 130, 246, 0.45)',
        'glow-button': '0 0 20px 0 rgba(37, 99, 235, 0.4)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
