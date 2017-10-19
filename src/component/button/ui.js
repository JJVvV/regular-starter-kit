/**
 * button 组件实现文件
 *
 * @version  1.0
 * @author   AlexLiu <havedrowned@163.com>
 */

import html from './component.html'
import './component.scss'

let Component = button.$extends({
    name     : 'u-button',
    template : html
})

export default Component

