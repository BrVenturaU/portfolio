/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "slide-down":
          "slide-down var(--a-duration) var(--a-delay) ease-in 1 both",
      },
      keyframes: {
        "slide-down": {
          from: { transform: "translateY(-200%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
