// module.exports = {
//     // vue 单页面解析器
//     "parser": "vue-eslint-parser",
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:vue/essential",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "parser": "@typescript-eslint/parser",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "vue",
//         "@typescript-eslint"
//     ],
//     "rules": {
//     }
// }
module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:@typescript-eslint/recommended'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 使用公司的 ts 和 ts-vue 的配置
        // ts-strict
        // '@typescript-eslint/no-unsafe-assignment': ['error'],
        // '@typescript-eslint/no-unsafe-call': ['error'],
        // '@typescript-eslint/no-unsafe-member-access': ['error'],
        // '@typescript-eslint/no-unsafe-return': ['error'],
        // '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        // '@typescript-eslint/restrict-template-expressions': ['error'],
        // '@typescript-eslint/restrict-plus-operands': ['error'],

        // ts-vue
        // 在 vue 项目中 不用担心 this 丢失问题，包括 .vue, mixins
        '@typescript-eslint/unbound-method': ['off'],

        // ts
        /**
         * 仅仅从下面这里
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
         * 从 recommended 里筛选的，非 recommended 的部分，还没有去看
         */
        '@typescript-eslint/no-floating-promises': ['off'],
        // 推荐开启，对 ts 接入要求不太高，可以删除一些报错频率较高的类型，如 object
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: false,
                types: {
                    String: {
                        message: 'Use string instead',
                        fixWith: 'string'
                    },
                    Boolean: {
                        message: 'Use boolean instead',
                        fixWith: 'boolean'
                    },
                    Number: {
                        message: 'Use number instead',
                        fixWith: 'number'
                    },
                    Symbol: {
                        message: 'Use symbol instead',
                        fixWith: 'symbol'
                    },
                    Function: {
                        message: [
                            'The `Function` type accepts any function-like value.',
                            'It provides no type safety when calling the function, which can be a common source of bugs.',
                            'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
                            'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
                        ].join('\n')
                    },
                    // object typing
                    Object: {
                        message: [
                            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                            '- If you want a type meaning "any value", you probably want `unknown` instead.'
                        ].join('\n')
                    },
                    '{}': {
                        message: [
                            '`{}` actually means "any non-nullish value".',
                            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                            '- If you want a type meaning "any value", you probably want `unknown` instead.'
                        ].join('\n')
                    }
                }
            }
        ],
        // 和 js 中的保持一致
        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'functions', 'methods']
            }
        ],
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
        '@typescript-eslint/prefer-regexp-exec': ['off'],
        // 关闭返回值要求，会减少多数误报
        // '@typescript-eslint/no-misused-promises': [
        //     'error',
        //     { checksVoidReturn: false },
        // ],
        // vue的模版中只有能一个根节点关闭，vue3 中不必须有根标签了
        'vue/no-multiple-template-root': 0,
        // vue文件的名字，要求首字母大写且必须为两个单词，加入忽略列表
        "vue/multi-word-component-names": ["error", {
            "ignores": ["Index"]
        }],
        // v-model带参数，会提示报错
        "vue/no-v-model-argument": "off",
    }
}
