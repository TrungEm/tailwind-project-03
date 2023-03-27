/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            Lato: ["Lato", "sans-serif"],
            Inter: ["Inter", "sans-serif"],
        },
        extend: {
            boxShadow: {
                "3xl": "30px 40px 150px -10px rgba(0, 0, 0, 0.18)",
                "4xl": "0px 0px 150px -20px rgba(0, 0, 0, 0.06)",
                "5xl": "40px 50px 100px -30px rgba(28, 28, 28, 0.06)",
                "6xl": "-14px -20px 110px -40px rgba(0, 0, 0, 0.14)",
                "7xl": "0px 25px 70px 10px rgba(0, 0, 0, 0.04)",
                "8xl": "-40px -40px 60px -15px rgba(201, 201, 201, 0.36)",
                "9xl": "0px 24px 48px rgba(93, 184, 141, 0.08)",
                "10xl": "0px 8px 10px rgba(84, 95, 122, 0.02)",
                "11xl": "0px 30px 70px rgba(0, 0, 0, 0.14)",
                "12xl": "-20px 40px 180px -40px rgba(0, 0, 0, 0.13)",
            },
            textShadow: {
                "2xl": "-1px 4px 10px rgba(40, 194, 121, 0.4)",
            },
        },
    },
    plugins: [require("tailwindcss-textshadow")],
};
