let Regular = require("regularjs")
let { expect } = require("chai")
export function run(ComponentName, Component, cases) {
  Object.keys(cases).forEach(key => {
    describe(`${ComponentName}#${key}`, () => {
      cases[key].forEach(cas => {
        let ins = new Component(cas.options)
        if (cas.before) cas.before(before, ins)

        it(cas.case, function() {
          let ret = ins[key](...cas.params)
          cas.test(expect, ins, ret)
        })
      })
    })
  })
}
