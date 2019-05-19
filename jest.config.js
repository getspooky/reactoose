module.exports = {
    "roots": [
        "./"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/test/)",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "testPathIgnorePatterns": [
        "/(build|docs|node_modules)/"
    ],
    "setupFiles": [
        './setupTests.ts'
    ],
    "moduleNameMapper": {
        "\\.(css|jpg|png)$": "<rootDir>/fileMock.ts"
    }
};