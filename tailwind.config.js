/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#31bb11",
        "custom-secondary": "#ffb700",
      },
      textColor: {
        "custom-primary": "#31bb11",
        "custom-secondary": "#1e1f6f",
      },
      fontFamily: {
        "google-anta": ["anta", "sans-serif"],
      },
      boxShadow: {
        text: "2px 2px #000000",
        "y-shadow":
          "0 10px 15px -10px rgba(0, 0, 0, 0.1), 0 -10px 15px -8px rgba(0, 0, 0, 0.1), -10px 0 15px -10px rgba(0, 0, 0, 0.1), 10px 0 15px -10px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "open-windown": "url('../src/assets/arrow-down.svg')",
        "gps-location": "url('../src/assets/location.svg')",
        "close-windown": "url('../src/assets/close.svg')",
        "visionOff-windown": "url('../src/assets/visionOffListOffers.svg')",
        "visionOn-windown": "url('../src/assets/eyeListOffers.svg')",
      },
      boxShadow: {
        "custom-shadow":
          "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
