/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'ikg-stealth': '#050505',
                'ikg-gold': '#C5A059',
                'ikg-lattice': '#1A1A1A',
                'ikg-anduril': '#F2F2F2',
            },
            fontFamily: {
                sans: ['Orbitron', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            backgroundImage: {
                'scanlines': "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
            },
            animation: {
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scan 8s linear infinite',
            },
            keyframes: {
                scan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' },
                }
            }
        },
    },
    plugins: [],
}
