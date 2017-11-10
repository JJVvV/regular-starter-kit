/**
 * Button 组件实现文件
 *
 * @version  1.0
 * @author   AlexLiu <havedrowned@163.com>
 */

let Regular = require("regularjs")
let Component = Regular.extend({
  config() {},

  init() {},

  //used for mocha cases, can be removed.
  click(number) {
    if (number > 20) {
      console.log("haha")
    }
    console.log("clicked")
    return number
  },

  alert(text) {
    console.log(text)
    return text
  }
})

export default Component
