/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            Lato: ["Lato", "sans-serif"],
        },
        extend: {
            boxShadow: {
                "3xl": "30px 40px 150px -10px rgba(0, 0, 0, 0.18)",
                "4xl": "0px 0px 150px -20px rgba(0, 0, 0, 0.06)",
                "5xl": "40px 50px 100px -30px rgba(28, 28, 28, 0.06)",
                "6xl": "-14px -20px 110px -40px rgba(0, 0, 0, 0.14)",
            },
        },
    },
    plugins: [],
};
