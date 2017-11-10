
## Test

### 常用依赖（测试覆盖率支持es6）

* babel-cli: is the command-line interface for babel; we use it during the build step.
* babel-register: automatically compiles ES2015 JavaScript as it's required in your tests.
* babel-plugin-istanbul: this plugin adds coverage instrumentation to your ES2015 code as it's compiled.
* nyc: outputs the coverage information to disk, and handles running reports.
* cross-env: used to set NODE_ENV=test in a cross-platform compatible way.
* mocha/chai: the test framework that I happen to be using for this tutorial.