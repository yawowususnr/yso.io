/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                card: "#191919",
                cardbg: "#FFFFFF2C",
            },
        },
    },
    plugins: [],
};
