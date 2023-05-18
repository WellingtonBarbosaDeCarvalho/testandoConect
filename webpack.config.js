const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // Caminho de saída para os arquivos empacotados
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Expressão regular para identificar arquivos JSX ou JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Outras regras para processar estilos, imagens, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensões de arquivo a serem resolvidas automaticamente
  },
  // Outras opções e configurações adicionais
};