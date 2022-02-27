// <type> [scope]: <description>
// [body]
// [footer]

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
    confirmCommit: '确认提交? (Y/n/e/h)',
  },
  // 跳过的 questions
  skipQuestions: ['body', 'footer'],
  // 长度
  subjectLimit: 100,
}
