// tailwind.config.js

//z index más grandes
module.exports = {
    theme: {
      extend: {
        zIndex: {
          '60': '60',
          '70': '70',
          '100': '100',
          'max': '2147483647', // Máximo permitido en CSS
        },
      },
    },
  };

//basis personalizado

module.exports = {
  theme: {
    extend: {
      flexBasis: {
        '2/8': '25%',    
        '3/8': '37.5%',  
      },
    },
  },
  plugins: [],
}