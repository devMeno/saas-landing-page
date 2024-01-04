/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/theme");
export default {
     content: [
          "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
          "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
          extend: {},
     },
     plugins: [nextui(), require("flowbite/plugin")],
};
