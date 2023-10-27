/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#070B15",
        light: "#04060C",
        primary: "#FBBF24",
        secondary: "#c90294",
        slate: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          600: "#475569",
          800: "#1E293B",
          900: "#0F172A",
        },
        sky: {
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
        },
      },
      width: {
        4.5: "18px",
        84: "21.5rem",
      },
      minWidth: {
        84: "21.5rem",
        100: "43rem",
      },
      height: {
        4.5: "18px",
        box: "80vh",
        screen: "100vh",
        content: "calc(100% - 130px)",
      },
      minHeight: {
        screen: "100vh",
        content: "calc(100% - 130px)",
      },
      lineHeight: {
        11: "48px",
        14: "64px",
      },
      boxShadow: {
        lg: "4px 4px 0",
        xl: "6px 6px 0",
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
      fontSize: {
        "6.5xl": "64px",
      },

      padding: {
        4.5: "18px",
        18: "72px",
      },

      screens: {
        xs: "550px",
        sm: "640px",
        md: "840px",
        lg: "1270px",
        xl: "1420px",
      },
      
    },
  },
  plugins: [],
}

