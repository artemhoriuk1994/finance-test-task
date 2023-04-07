module.exports = {
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
}