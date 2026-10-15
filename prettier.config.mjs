/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  printWidth: 100,
  tailwindFunctions: ['clsx', 'tw', 'cn'],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
