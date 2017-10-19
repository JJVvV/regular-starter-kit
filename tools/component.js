
/******************************************
 *  Author : Author   
 *  Created On : Thu Oct 12 2017
 *  File : index.js
 *******************************************/
// component button -t ./src/component

let path = require('path')
let fs = require('fs')
let program = require('commander')
let createFolders = require('./utils/createFolders.js')
let loopSrc = require('./utils/loopSrc.js')
let argConfig = require('./config/argConfig.js')
program.version('0.1.0')
        .usage('create component')
        .description('create component files')

const DIRNAME = './src/component'
program
    .command("component <cname>")
    .alias("cp")
    .description("create component files")
    .option("-a, --author <value>", "author")
    .option("-e, --email <value>", "email")
   
    .action(function(cname, options) {
        //only component name
        if(path.basename(cname) === cname){
            cname = path.join(DIRNAME, cname)
        }
        createFolders(cname)
    
        let opt = {}
        let name = path.basename(cname)
        argConfig.forEach((key) => {
            opt[key] = options[key]
        })
        addFiles(cname, {...opt, name})
    })

program.parse(process.argv)

function addFiles(to, options){
    let from = './tools/template/{{name}}'

    loopSrc(from, undefined, (from) => {
        
        fs.readFile(from, (err, data) => {
            let name = path.basename(from)
            let fileTo = path.join(to, name)
            createFolders(fileTo)
            let d = data.toString()
            Object.keys(options).forEach((key) => {
                let reg = new RegExp(`{{${key}}}`, 'g')
                d = d.replace(reg, options[key])
            })
            writeFile(fileTo, d)
            
        })
        
    })
}

function writeFile(src, data){
    fs.writeFile(src, data, (err) => {
        if(err){
            console.log('fail to copy file to %s', src)
            return
        }
        console.log('generate file %s success', src)
    })
}



