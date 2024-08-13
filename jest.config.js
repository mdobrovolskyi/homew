module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^axios$': '<rootDir>/src/__mocks__/axios.js',
    },
}
