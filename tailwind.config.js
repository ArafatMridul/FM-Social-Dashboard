/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Inter: ["Inter", "serif"],
            },
            fontWeight: {
                "fw-normal": 400,
                "fw-bold": 700,
            },
            colors: {
                "primary-green": "hsl(163, 72%, 41%)",
                "primary-red": "hsl(356, 69%, 56%)",
                "clr-fb": "hsl(208, 92%, 53%)",
                "clr-tw": "hsl(203, 89%, 53%)",
                "clr-ig-1": "hsl(37, 97%, 70%)",
                "clr-ig-2": "hsl(329, 70%, 58%)",
                "clr-yt": "hsl(348, 97%, 39%)",

                "dark-tgl-liner-1": "hsl(210, 78%, 56%)",
                "dark-tgl-liner-2": "hsl(146, 68%, 55%)",
                "light-tgl": "hsl(230, 22%, 74%)",

                // Dark Mode colors
                "dark-bg": "hsl(230, 17%, 14%)",
                "dark-top-bg-pattern": "hsl(232, 19%, 15%)",
                "dark-card-bg": "hsl(228, 28%, 20%)",
                "dark-txt-1": "hsl(228, 34%, 66%)",
                "dark-txt-2": "hsl(0, 0%, 100%)",

                // Light Mode colors
                "light-bg": "hsl(0, 0%, 100%)",
                "light-top-bg-pattern": "hsl(225, 100%, 98%)",
                "light-card-bg": "hsl(227, 47%, 96%)",
                "light-txt-1": "hsl(228, 12%, 44%)",
                "light-txt-2": "hsl(230, 17%, 14%)",
            },
        },
    },
    plugins: [],
};
