/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '360px',
        md: '820px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
