module.exports = {
  root: true,
  // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parser: 'babel-eslint',
  // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
  extends: [
    'airbnb-base' // eslint-config-airbnb-base
  ],
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  // required to lint *.src files
  plugins: [
    'html',
    'react',
    'prettier'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // 添加自定义ESLint规则
  // "off" or 0 关闭规则
  // "warn" or 1 将规则视为一个警告（不会影响退出码）
  // "error" or 2 将规则视为一个错误 (退出码为1)
  // ESLint自定义规则：http://eslint.cn/docs/rules/
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/first': 0,
    'arrow-parens': 0,
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/jsEntries.js']
    }],
    'no-underscore-dangle': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 1 : 0, // 是否禁止使用alert confirm prompt
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0, // 是否禁止使用console，0表示关闭
    'consistent-return': 0, // return 后面是否允许省略
    'comma-dangle': 0, // 允许末尾有逗号
    'no-use-before-define': 1, // 兼容函数本身调用自己的情况
    'no-plusplus': 0, // 允许使用 i++
    'prefer-object-spread ': 0,
    'import/newline-after-import': 0,
    'no-unreachable': 0,
  }
};
