module.exports = {
    projects: [
      '<rootDir>/backend',
      '<rootDir>/frontend',
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.tsx$': 'ts-jest',
    },
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
  };
  