const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  rules: [
    // Règle pour les fichiers CSS
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },

    // Règle pour les fichiers SCSS (avec prise en charge des polices Google Fonts)
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
  ],
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Open Sans', variants: ['300', '400' ,'500' ,'600', '700'] },
        { family: 'Roboto', variants: ['300', '400' ,'500', '600'] },
        { family: 'Roboto Slab', variants: ['300', '400' ,'500', '600'] },
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
