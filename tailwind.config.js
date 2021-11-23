module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpleTem: '#6160DC',
        purpleTem10:'#F0F0FC',
        purpleHover: '#43419E',
        grayTem: '#8E8EA1',
        grayLight: '#F5F5F5',
        blueTem: '#54C5EB',
        yellowTem: '#FFB74A',
        blackTem: '#22242C',
        greenTem: '#00A389',
        redTem: '#FF4A55',
        backgContTem: '#F9F9F9',
       },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
