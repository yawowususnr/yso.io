/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                card: "#111111",
                cardalt: "#181818",
                cardbg: "#FFFFFF2C",
                graytext: "#B4B4B4",
            },
        },
    },
    plugins: [],
};
