export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-l": "hsl(237 49% 15%)",
        "bg-d": "hsl(214 47% 23%)",
        "paper-l": "rgb(86 113 245)",
        "paper-d": "rgb(72 101 244)",
        "scissors-l": "rgb(236 169 34)",
        "scissors-d": "rgb(236 158 14)",
        "rock-l": "rgb(221 64 93)",
        "rock-d": "rgb(220 46 78)",
        "lizard-l": "rgb(140 93 229)",
        "lizard-d": "rgb(131 79 227)",
        "spock-l": "rgb(82 190 209)",
        "spock-d": "rgb(64 185 206)",
        dark: "hsl(229 25% 31%)",
        light: "hsl(0 0% 97.3%)",
        score: "hsl(229 64% 46%)",
        "header-outline": "rgb(96 110 133)",
      },
    },
  },
  plugins: [],
};
