/**
 * Unit Test for Dot
 *
 * @author AlexLiu <havedrowned@163.com>
 */


let {expect} = require('chai')
let cases = require('./cases')
let util = require('../../util.js')
import Button from '../../../src/component/Button/component.js'

// use expect style BDD
// define component test
describe('Unit Test - Button',function () {
    // new instance
    describe('new Button',function () {
        
        it('should be ok to instance Button',function () {
            var inst = new Button()
            expect(inst).to.be.an.instanceof(Button)
        })
    })
    // test for all api
    util.run("Button",Button, cases)
})