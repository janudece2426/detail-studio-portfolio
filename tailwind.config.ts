import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0A0A09",
        ink: "#11110F",
        ivory: "#F4ECDC",
        muted: "#BFB5A2",
        gold: "#D8B76A",
        mint: "#86F2D3",
      },
      boxShadow: {
        glow: "0 0 60px rgba(216, 183, 106, 0.16)",
        mint: "0 0 60px rgba(134, 242, 211, 0.12)",
      },
      backgroundImage: {
        "studio-radial":
          "radial-gradient(circle at 15% 15%, rgba(216,183,106,0.18), transparent 34%), radial-gradient(circle at 80% 8%, rgba(134,242,211,0.13), transparent 28%), linear-gradient(135deg, #0A0A09 0%, #12110F 48%, #080808 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
