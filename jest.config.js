module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/src'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: [
    '<rootDir>/src/test/setup.ts'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
