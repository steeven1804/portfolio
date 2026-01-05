import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0B0F19',
          surface: '#111827',
          text: '#E5E7EB'
        },
        light: {
          base: '#F8FAFC',
          text: '#0F172A',
          border: '#E2E8F0'
        },
        accent: {
          cyan: '#22D3EE',
          violet: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.12)'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        gradientMove: 'gradientMove 15s ease infinite'
      }
    }
  },
  plugins: []
};

export default config;