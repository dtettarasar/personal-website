/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {

    extend: {
        // 1. Définition des keyframes
        keyframes: {
        gradientMove: {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
        },
        borderPulse: {
            '0%': { 'box-shadow': '0 0 0 0 rgba(74, 222, 128, 0.4)' },
            '70%': { 'box-shadow': '0 0 25px 15px rgba(74, 222, 128, 0)' },
            '100%': { 'box-shadow': '0 0 0 0 rgba(74, 222, 128, 0)' },
        },
        scanlines: {
            'from': { 'background-position': '0 0' },
            'to': { 'background-position': '0 4px' },
        },
        },
        // 2. Définition des animations (pour pouvoir utiliser animate-*)
        animation: {
        'gradient-move': 'gradientMove 25s ease-in-out infinite alternate',
        'border-pulse': 'borderPulse 2.8s infinite ease-in-out',
        'scanlines': 'scanlines 0.8s linear infinite',
        },
        // 3. Définition des couleurs spécifiques pour le gradient (optionnel, mais propre)
        colors: {
            'gradient-dark': '#0d1117',
            'gradient-mid1': '#1c2834',
            'gradient-mid2': '#223844',
            'gradient-mid3': '#234d4d',
            'gradient-accent': '#3aa37f',
        }
    },
    
  },
  plugins: [],
}