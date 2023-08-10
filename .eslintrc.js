// Copyright (C) 2021 Storj Labs, Inc.
// See LICENSE for copying information.

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2020,
        vueFeatures: {
            filter: true,
        },
    },
    plugins: ['storj', 'eslint-plugin-import'],
    rules: {
        'linebreak-style': ['error', 'unix'],

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        'indent': ['warn', 4],
        'vue/html-indent': ['warn', 4],

        '@typescript-eslint/no-unused-vars': [
            'warn', {
                'vars': 'all',
                'args': 'all',
                'argsIgnorePattern': '^_',
            }],

        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        'no-multiple-empty-lines': ['error', { 'max': 1 }],

        'import/order': ['error', {
            'pathGroups': [
                {
                    'group': 'external',
                    'pattern': 'vue-property-decorator',
                    'position': 'before',
                },
                {
                    'group': 'internal',
                    'pattern': '@/app/components/**',
                    'position': 'after',
                },
                {
                    'group': 'internal',
                    'pattern': '@/../static/**',
                    'position': 'after',
                },
            ],
            'newlines-between': 'always',
        }],
        'no-duplicate-imports': 'error',
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'semi': ['error', 'always'],
        'keyword-spacing': ['error'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-trailing-spaces': ['error'],
        'eqeqeq': ['error'],
        'comma-spacing': ['error'],
        'arrow-spacing': ['error'],
        'space-in-parens': ['error'],
        'space-before-blocks': ['error'],

        'vue/multi-word-component-names': ['off'],
        'vue/max-attributes-per-line': ['off'],
        'vue/singleline-html-element-content-newline': ['off'],

        'vue/block-lang': ['error', { 'script': { 'lang': 'ts' } }],
        'vue/html-button-has-type': ['error'],
        'vue/no-unused-properties': ['warn'],
        'vue/no-unused-refs': ['warn'],
        'vue/no-useless-v-bind': ['warn'],

        'vue/no-useless-template-attributes': ['off'], // TODO: fix later

        'vue/no-unregistered-components': ['warn', { ignorePatterns: ['router-link', 'router-view'] }],

        'storj/vue/require-annotation': 'warn',

        'vue/no-v-html': ['error'],
    },
    settings: {
        'import/resolver': {
            'eslint-import-resolver-custom-alias': {
                'alias': {
                    '@': './src',
                },
                extensions: ['.ts', '.spec.ts', '.vue'],
            },
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
            node: true,
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
            'vue-eslint-parser': ['.vue'],
        },
    },
};
