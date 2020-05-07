module.exports = {
  printWidth: 200, // 指定代码换行的行长度。单行代码宽度超过指定的最大宽度，将会换行，如果都不想换，可以添加 "proseWrap": "never"
  proseWrap: 'never',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false, // 是否在语句末尾打印分号，这里选择不加
  trailingComma: 'none', // 没有尾随逗号
  bracketSpacing: true, // 是否在对象属性添加空格，这里选择是 { foo: bar }
  quoteProps: 'consistent', // 如果对象中至少有一个属性需要引号，则引用所有属性
  jsxSingleQuote: true,
  endOfLine: 'lf'
}
