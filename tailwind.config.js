/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242041',
        secondary: '#363062',
        surface: '#D7D6E0',
        border: '#2D3959',
        hover: '#222B43',
        pressed: '#41485A',
        focus: '#41485A',
        contentbox: '#FAFBFC',
      },
    },
  },
  plugins: [],
}

