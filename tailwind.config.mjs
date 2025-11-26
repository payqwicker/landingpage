/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E3C3C",
        secondary: "var(--secondary)",
        complimentary: "#EEFBEE",
      },
      fontFamily: {
        mainFont: ["konnect", "sans-serif"],
      },
    },
  },
  plugins: [],
};
