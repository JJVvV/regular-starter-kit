/**
 * Unit Test for Dot
 *
 * @author AlexLiu <havedrowned@163.com>
 */


let {expect} = require('chai')
let cases = require('./cases')
let util = require('../../util.js')
import Button2 from '../../../src/component/Button2/component.js'

// use expect style BDD
// define component test
describe('Unit Test - Button2',function () {
  // new instance
  describe('new Button2',function () {
      it('should be ok to instance Button2',function () {
        var inst = new Button2()
        expect(inst).to.be.an.instanceof(Button2)
      })
  })
  // test for all api
  util.run("Button2",Button2, cases)
})