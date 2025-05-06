module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // this is essential for App Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        accent: "var(--accent)",
        muted: "var(--text-muted)",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
