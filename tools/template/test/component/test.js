/**
 * Unit Test for Dot
 *
 * @author {{author}} <{{email}}>
 */


let {expect} = require('chai')
let cases = require('./cases')
let util = require('{{utilSrc}}')
import {{name}} from '{{componentSrc}}'

// use expect style BDD
// define component test
describe('Unit Test - {{name}}',function () {
  // new instance
  describe('new {{name}}',function () {
      it('should be ok to instance {{name}}',function () {
        var inst = new {{name}}()
        expect(inst).to.be.an.instanceof({{name}})
      })
  })
  // test for all api
  util.run("{{name}}",{{name}}, cases)
})