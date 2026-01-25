module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/**/*.js",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep teal
        primary: {
          DEFAULT: '#2D5A5A', // teal-800
          50: '#F0F5F5', // teal-50
          100: '#D4E4E4', // teal-100
          200: '#A9C9C9', // teal-200
          300: '#7EAEAE', // teal-300
          400: '#538F8F', // teal-400
          500: '#2D5A5A', // teal-500
          600: '#244848', // teal-600
          700: '#1B3636', // teal-700
          800: '#122424', // teal-800
          900: '#091212', // teal-900
        },
        // Secondary Colors - Muted sage
        secondary: {
          DEFAULT: '#4A5D5A', // sage-700
          50: '#F2F4F3', // sage-50
          100: '#E0E5E4', // sage-100
          200: '#C1CBC9', // sage-200
          300: '#A2B1AE', // sage-300
          400: '#768783', // sage-400
          500: '#4A5D5A', // sage-500
          600: '#3B4A48', // sage-600
          700: '#2C3736', // sage-700
          800: '#1E2524', // sage-800
          900: '#0F1212', // sage-900
        },
        // Accent Colors - Vibrant teal
        accent: {
          DEFAULT: '#3B7B7B', // teal-accent-600
          50: '#F0F7F7', // teal-accent-50
          100: '#D6EBEB', // teal-accent-100
          200: '#ADD7D7', // teal-accent-200
          300: '#84C3C3', // teal-accent-300
          400: '#5FAFAF', // teal-accent-400
          500: '#3B7B7B', // teal-accent-500
          600: '#2F6262', // teal-accent-600
          700: '#234A4A', // teal-accent-700
          800: '#183131', // teal-accent-800
          900: '#0C1919', // teal-accent-900
        },
        // Background Colors
        background: '#FAFAF9', // warm-gray-50
        surface: '#FFFFFF', // white
        'surface-elevated': '#FFFFFF', // white
        // Text Colors
        'text-primary': '#2A2A2A', // charcoal-900
        'text-secondary': '#6B7280', // gray-500
        'text-tertiary': '#9CA3AF', // gray-400
        'text-disabled': '#D1D5DB', // gray-300
        // Semantic Colors
        success: {
          DEFAULT: '#059669', // emerald-600
          50: '#ECFDF5', // emerald-50
          100: '#D1FAE5', // emerald-100
          600: '#059669', // emerald-600
          700: '#047857', // emerald-700
        },
        warning: {
          DEFAULT: '#D97706', // amber-600
          50: '#FFFBEB', // amber-50
          100: '#FEF3C7', // amber-100
          600: '#D97706', // amber-600
          700: '#B45309', // amber-700
        },
        error: {
          DEFAULT: '#DC2626', // red-600
          50: '#FEF2F2', // red-50
          100: '#FEE2E2', // red-100
          600: '#DC2626', // red-600
          700: '#B91C1C', // red-700
        },
        // Border Colors
        border: 'rgba(107, 114, 128, 0.2)', // gray-500 with opacity
        'border-light': 'rgba(107, 114, 128, 0.1)', // gray-500 with lighter opacity
        'border-focus': '#3B7B7B', // accent color
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        sans: ['Source Sans 3', 'sans-serif'],
        caption: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
      },
      spacing: {
        'xs': '0.5rem', // 8px
        'sm': '1rem', // 16px
        'md': '1.5rem', // 24px
        'lg': '2rem', // 32px
        'xl': '4rem', // 64px
      },
      borderRadius: {
        'sm': '0.25rem', // 4px
        'md': '0.5rem', // 8px
        'lg': '0.75rem', // 12px
        'xl': '1rem', // 16px
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(45, 90, 90, 0.08)',
        'DEFAULT': '0 1px 3px rgba(45, 90, 90, 0.08)',
        'md': '0 2px 6px rgba(45, 90, 90, 0.12)',
        'lg': '0 10px 25px -5px rgba(45, 90, 90, 0.15)',
        'card': '0 1px 3px rgba(45, 90, 90, 0.08)',
        'card-hover': '0 2px 6px rgba(45, 90, 90, 0.12)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        'base': '0',
        'card': '1',
        'dropdown': '50',
        'navigation': '100',
        'modal-backdrop': '200',
        'modal': '201',
        'tooltip': '300',
      },
      maxWidth: {
        'prose': '65ch',
      },
      minHeight: {
        'button': '48px',
        'input': '48px',
        'list-item': '56px',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}