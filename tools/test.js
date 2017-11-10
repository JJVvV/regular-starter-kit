



/******************************************
 *  Author : Author   
 *  Created On : Thu Oct 12 2017
 *  File : index.js
 *******************************************/
// component button -t ./src/component

let fs = require('fs')
let path = require('path')
let {exec} = require('child_process')

let program = require('commander')

program.version('0.1.0')
        .usage('component test')
        .description('component test')


program
    .command("test <file>")
    .alias("ts")
    .description("comopnent test")
   
    .action(function(file, options) {
        
        if(path.extname(file) === ''){
            file = path.resolve(file, 'test.js')
        }
        let baseUrl = './test/component'
        let url = path.resolve(baseUrl, file)
        if(!fs.existsSync(url)){
            console.log(`file ${url} not exist.`)
            return
        }
        console.log(`mocha ${url} --require babel-register ..........`)
        exec(`mocha ${url} --require babel-register --colors`, (err, stdout) => {
            // if(err){
            //     console.log(err)
            //     // return
            // }
            console.log(stdout)
        })
    })

program.parse(process.argv)