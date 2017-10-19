
/**
 * Unit Test for {{name}}
 *
 * @author {{author}}} <{{email}}>
 */

import chai from 'chai'
import {{name}} from '{{url}}'
import cases from './cases.js'

// use expect style BDD
var expect = chai.expect;
// define component test
describe('Unit Test - {{name}}',function () {
    // new instance
    describe('new {{name}}',function () {
        it('should be ok to instance Dot',function () {
            var inst = new {{name}}();
            expect(inst).to.be.an.instanceof({{name}});
        });
    });
    // test for all api
    //ut.runTest(d,'Dot',cases);
});