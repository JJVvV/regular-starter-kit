# regular-starter-kit

[Regular Starter Kit](https://github.com/JJVvV/regular-starter-kit) is a optional boilerplate built with Regularjs, Webpack, Node.js.

[Regularjs](https://github.com/regularjs/regular)

## Getting Started

```bash
npm install
```

## Commands

* `npm run component -- <ComponentName>`
    
    This will create a directory named ComponentName which include some component files and test files in test/component/ComopnentName

* `npm run test -- <ComponentName>`

    run tests for ComopnentName

* `npm run remove -- <ComponentName>`

    remove ComopnentName

## Test

运行component命令生成组件的同时会生成对应的测试文件，测试文件统一保存在test文件夹下。测试用例可使用es6进行编写。

```
├── /test/                       # 测试文件统一保存入口
│   ├── /component/              # 存放组件测试用例入口
│       ├── /Button/             # 组件名称
│           ├── /cases.js/       # 测试用例编写文件
│           ├── /test.js/        # 测试用例执行文件
```

当时在做测试用例的时候面临一个问题：如何测试dom元素？
有这么几种解决方案：

* mocha-plantom 
* mocha-jsdom 在global对象上赋值window，document等对象

第一种方法需要生成对应的html文件，不够简洁，且对于es6编写的文件（测试用例、组件）需要进行转化比较麻烦。第二种方法直接报错，因为Regularjs在运行时会先检测是否是浏览器端，如果组件存在template属性的话，在命令行中运行dom操作直接报错。

但是！真的有必要进行dom测试吗？多数情况下，一个好的UI实现其实是纯净的(pure)，不需要进行dom测试的。只需要关心输入和对应的输出就好。那么，如果不考虑dom测试的情况，隐藏掉组件的template属性，命令行运行Regular组件就不会报错了。所以测试文件(test.js)中直接引用了component.js。

```
├── /src/                           # 总入口
│   ├── /component/                 # 存放组件入口
│       ├── /Button/                # 组件名称
│           ├── /component.html/    # 组件template
│           ├── /component.js/      # 组件逻辑（不包含template）
│           ├── /component.scss/    # 组件样式
│           ├── /ui.js/             # 组件导出（包含了逻辑、template、样式）

```
