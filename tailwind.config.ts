import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    require("@tailwindcss/forms"), // resets form styles
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"], // default font
        poppins: ["var(--font-poppins)"],
      },
    },
  },
};

export default config;
