/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        accent: "var(--accent)",
        muted: "var(--text-muted)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
      },
    },
  },
  darkMode: "media", // or 'class' if you want toggle control
  plugins: [],
};
