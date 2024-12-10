/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Define your global font here
        // You can add multiple font options for fallback
        sans: [
          "-apple-system", // Primary font
          "system-ui", // Fallback 1
          "Inter", // Fallback 2
          "Segoe UI", // Fallback 3
          "Roboto", // Fallback 4
          "Helvetica Neue", // Fallback 5
          "Arial", // Fallback 6
          "sans-serif", // Final fallback
        ],
      },
    },
  },
  plugins: [daisyui],
};
