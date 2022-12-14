/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": 'ts-jest',
        "^.+\\.(css|sass|scss)$": 'ts-jest',
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": 'ts-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"]
};
