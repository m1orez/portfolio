export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7e22ce', 
        accent: '#a855f7',  
      },
      animation: {
        bounceSlow: 'bounce 3s infinite',
        pulseSlow: 'pulse 4s infinite',
      },
    },
  },
  plugins: [],
};
