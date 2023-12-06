module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@routes': './src/routes',
            '@app': './src/screens/app',
            '@auth': './src/screens/auth',
            '@hooks': './src/utils/hooks',
            '@interfaces': './src/utils/interfaces',
            '@themes': './src/utils/themes',
          }
        } 
      ]
    ],
  };
};
