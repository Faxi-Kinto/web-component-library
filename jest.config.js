module.exports = {
  roots: ['<rootDir>/src'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleDirectories: ['node_modules', 'src'],

  setupFilesAfterEnv: ['./src/setupTests.ts'],

  // By default it looks for .tsx files inside of __tests__ folders,
  // as well as any files with a suffix of .test or .spec.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // styles are tested with snapshots, thus no need here
  collectCoverageFrom: [
    'src/components/**/*component.tsx',
    '!coverage/**',
    '!node_modules/**',
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
