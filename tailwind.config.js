/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "xfood-black": "#000000",
        "xfood-gray-dark": "#101010",
        "xfood-gray-medium": "#1F2937",
        "xfood-gray-light": "#9CA3AF",
        "xfood-gray-lighter": "#D0D0D0",
        "xfood-gray-lightest": "#D1D5DB", // Added for consistency with Kivendas subtle grays
        "xfood-off-white": "#E1E1E1",
        "xfood-white": "#F3F4F6",
        "xfood-white-pure": "#FAFAFA", // Added for consistency with Kivendas pure whites
        "xfood-red-dark": "#A94949", // More muted red
        "xfood-red-medium": "#B91C1C", // Stronger red
        "xfood-red-light": "#CA2323", // Brighter red
        "xfood-red-vibrant": "#DC2626", // Even brighter red
        "xfood-red-accent": "#EF4444", // Accent red
        "xfood-green": "#18AA4E", // For success messages or highlights
        "xfood-orange": "#F97316", // For highlights or secondary CTAs
      },
      fontFamily: {
        // Você pode adicionar fontes personalizadas aqui para seguir o Kivendas, se desejar
        // sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
