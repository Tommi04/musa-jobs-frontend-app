module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    //possiamo anche metterci i breakpoint di bootstrap
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    /* MI HA SPUTTANATO TUTTI I COLORI, QUESTI SONO I COLORI, NON VANNO SOVRASCRITTI MA ESTESI
    colors:{
      red:{
        300:'#000' //così modifichiamo la classe 300 e viene presa da tutte le cose che prendono il colore
                   // (border-red-300, ecc...)
      }
    },
    */
    extend: {
      colors:{
        "mj-green": {
          100: '#7bca55' //crea l'equivalente classe, mj-green-100 ... ed ho esteso il colors
        },
        "mj": {
          'green-1': '#7bca55',
          'blue-1': '#1a68b3'
        }
      }
    },
  },
  variants: {
    backgroundColor:['responsive', 'hover', 'focus', 'disabled'],
    backgroundOpacity:['responsive', 'hover', 'focus', 'disabled']
  },
  plugins: [],
}
