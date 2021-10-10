module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-export-namespace-from'],
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@atoms': './src/components/atoms',
          '@templates': './src/components/templates',
          '@components': './src/components',
          '@screens': './src/screens',

          '@api': './src/api',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@': './src',
        },
      },
    ],
  ],
};
