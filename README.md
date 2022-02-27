# vite-vue-test

用于一些日常开发的测试

## 工程化

- 默认使用 pnpm 包管理器

### EditorConfig

1. 下载 [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 插件
2. 添加配置文件

```plain
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = false # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### ESLint

1. 安装依赖

```shell
pnpm add -D eslint
```

2. 生成 eslint 配置文件

```shell
pnpm init @eslint/config
```

3. 修改配置文件

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['warn', 'never'],
    'vue/require-default-prop': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
  },
}
```

### prettier

1. 安装依赖 (或者直接使用 vscode 插件)

```shell
pnpm add -D prettier
```

2. 添加配置文件

```json
{
  "semi": false, // 不使用分号
  "singleQuote": true, // 使用单引号
  "tralingComma": "none" // 尾随逗号
}
```

### commitizen

1. 安装全局依赖

```shell
pnpm add -g commitizen@latest
```

### cz-customizable

1. 安装依赖

```shell
pnpm add -D cz-customizable
```

2. 添加配置到 package.json 中

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

3. 添加配置文件到根目录

```plain
<type>[scope]: <description>
[body]
[footer]
module.exports = {
  // 类型
  types: [
    {
      value: 'feat',
      name: 'feat:      新功能',
    },
    {
      value: 'fix',
      name: 'fix:       修复',
    },
    {
      value: 'docs',
      name: 'docs:      文档变更',
    },
    {
      value: 'style',
      name: 'style:     代码格式',
    },
    {
      value: 'refactor',
      name: 'refactor:  重构',
    },
    {
      value: 'perf',
      name: 'perf:      性能优化',
    },
    {
      value: 'test',
      name: 'test:      测试',
    },
    {
      value: 'chore',
      name: 'chore:     构建过程',
    },
    {
      value: 'revert',
      name: 'revert:    回退',
    },
    {
      value: 'build',
      name: 'build:     打包',
    },
  ],
  // 消息步骤
  messages: {
    type: '选择一个类型:',
    customScope: '请输入一个范围（可选）:',
    subject: '请输入描述（必填）:',
    body: '请输入详细描述（可选）:',
    footer: '请输入脚注（可选）:',
    confirmCommit: '确认提交? (y/n/e/h)',
  },
  // 跳过的 questions
  skipQuestions: ['body', 'footer'],
  // 长度
  subjectLimit: 100,
}
```

4. 使用 `git cz` 代替 `git commit` , 执行提交命令

```plain
git cz

// 根据提示完成
...
```

### git hooks

- pre-commit
- commit-msg

### commitlint

1. 安装依赖

```shell
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

2. 创建配置文件

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 类型枚举
    'type-enum': [
      // 错误级别 2-error/1-warn/0-off
      2,
      // 总是验证 always/never
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    // 大小写验证
    'subject-case': [0],
  },
}
```

### husky

1. 安装依赖

```shell
pnpm add -D husky
```

2. 创建命令

```shell
npm set-script prepare "husky install"
```

3. 生成 .husky 文件夹

```shell
pnpm prepare
```

4. 添加 commit-msg hook

- 提交时验证 commit message

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

5. 添加 pre-commit hook

- 提交之前验证代码规范

```shell
npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"
```

### lint-staged

1. 安装依赖

```shell
pnpm add -D lint-staged
```

2. 修改配置文件

```json
"lint-staged": {
  "*.{js,vue}": [
    "eslint --fix",
    "git add"
  ]
}
```

3. 修改 pre-commit hook

```json
npx lint-staged
```
