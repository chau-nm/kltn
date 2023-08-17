module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            parserOptions: {
                sourceType: "script",
                project: "./tsconfig.json",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false
            }
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off",
    },
    ignorePatterns: ["tailwind.config.js", "vite.config.ts"]
};
