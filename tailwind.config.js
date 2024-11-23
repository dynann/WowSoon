/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4FAE5A",
        secondary: "#000000",
        accent: "#F6F6F6"
      },
    },
    fontFamily: {
      'sans': ['ui-sans', 'system-ui'],
      'serif': ['ui-serif', 'Kulim Park'],
      Kulim: ['"Kulim Park"', 'sans-serif']
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
};
