const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
// const path = require('path')

module.exports = {

  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Open Sans', variants: ['300', '400' ,'500' ,'600', '700'] },
        { family: 'Roboto', variants: ['300', '400' ,'500', '600'] },
        { family: 'Montserrat', variants: ['300', '400' ,'500' , '600']},
        { family: 'Lato', variants: ['300', '400' ,'500' , '600']},
        { family: 'Cabin', variants: ['300', '400' ,'500' , '600']},
        { family: 'Verdana', variants: ['300', '400' ,'500' , '600']},
        { family: 'Georgina', variants: ['300', '400' ,'500' , '600']},
        { family: 'Arial', variants: ['300', '400' ,'500' , '600']},
        { family: 'Ubuntu', variants: ['300', '400' ,'500' , '600']},
        { family: 'Playfair Display', variants: ['300', '400' ,'500' , '600']},
      ],
    }),
    // Autres plugins
  ],
};
