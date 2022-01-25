module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};