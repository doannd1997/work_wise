module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./",
            "rootPathPrefix": "~/"
          },
          // {
          //   "rootPathSuffix": "./res",
          //   "rootPathPrefix": "~Res/"
          // },
        ]
      }
    ]
  ],
};