/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(p-map"
      + "|indent-string"
      + "|aggregate-error"
      + "|clean-stack"
      + "|escape-string-regexp"
      + ")/)",
  ],
  verbose: true
};