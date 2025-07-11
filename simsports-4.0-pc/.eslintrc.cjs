module.exports = {
	root: true, //表示当前配置为根配置，将不再从上级文件夹查找配置
	env: {
		// 指定了代码运行的环境
		browser: true, //浏览器
		es6: true, //ES6
		node: true, //Node.js
	},
	/* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
	parser: "vue-eslint-parser",
	/* 优先级低于parse的语法解析配置 */
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020, //ECMAScript语法-2020年
		sourceType: "module", //正在使用的模块类型
		jsxPragma: "React", //指定React导入的名称
		ecmaFeatures: {
			/* ECMAScript语言功能 */
			jsx: true, //允许解析JSX语法
		},
	},
	extends: [
		// 扩展使用 vue3 检查规则和eslint推荐规则
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		// typescript-eslint推荐规则,
		"plugin:@typescript-eslint/recommended",
		// prettier推荐规则,
		"prettier",
		"plugin:prettier/recommended",
	],
	rules: {
		/*
		 * "off" 或 0    ==>  关闭规则
		 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
		 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
		 *  eslint (http://eslint.cn/docs/rules)
		 */
		"prettier/prettier": "warn", // 编辑器里会给prettier错误进行报错
		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
		"no-use-before-define": "warn", // 禁止在 函数/类/变量 定义之前使用它们
		"prefer-const": "error", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		"no-irregular-whitespace": "warn", // 禁止不规则的空白
		"no-console": ["off", { allow: ["info", "warn", "error", "debug"] }], //禁用console
		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": "warn", // 禁止定义未使用的变量
		"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		"@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
		"@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		"@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
		"@typescript-eslint/no-empty-function": "off", // 禁止空函数
		"@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
		"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型
		// vue规则
		"vue/multi-word-component-names": "off", //驼峰命名法关闭
	},
};
