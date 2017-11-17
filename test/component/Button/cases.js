/**
 * button 组件测试文件
 *
 * @version  1.0
 * @author   AlexLiu <havedrowned@163.com>
 */

module.exports =  {
    /**
     * 接口用例配置列表，接口名称作为配置 KEY，值为用例列表
     *
     * "api_name": [{
     *      "case": "test case name",   // 测试用例描述信息
     *      "params": [],               // 接口调用参数列表
     *      "event": "event_name",      // 接口触发的事件名称
     *      "global": false,            // 是否类上的全局事件
     *      "before": function(before, inst){
     *          // 测试之前准备逻辑
     *          // before - 可用于异步回调
     *          // inst   - 实例
     *      },
     *      "after": function(after, inst){
     *          // 测试之后逻辑
     *          // before - 可用于异步回调
     *          // inst   - 实例
     *      }
     *      "test": function(expect, inst, ret){
     *          // 接口运行之后结果匹配逻辑，返回 true 表示异步测试还在进行中，此次单元测试不会马上结束
     *          // expect - 用例结果匹配接口
     *          // inst   - 实例
     *          // ret    - 事件的输入参数，或者接口的返回结果
     *      }
     * }]
     */

     "click": [
         {
            "case": "",   
            "params": [3],  
            "options": {
                data: {
                    
                }
            },
            
            "before": function(before, inst){
                
            },

            "after": function(after, inst){
                
            },

            "test": function(expect, inst, ret){
                expect(ret).to.equal(3)
            }
         },

         {
            "case": "",   
            "params": [11],  
            "options": {
              data: {
                  
              }
            },
            
            "before": function(before, inst){
                
            },

            "after": function(after, inst){
                
            },

            "test": function(expect, inst, ret){
                expect(ret).to.equal(11)
            }
         }
     ]
}