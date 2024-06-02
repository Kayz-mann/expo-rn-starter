module.exports = {
    preset: 'react-native',
    setupFiles: ['./jest/setup.js'],
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
    cacheDirectory: '.jest/cache',
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@testing-library|@?react-navigation)',
    ],
  };