
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

const DIRNAME = './src/component/'
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
        // 相对于DIRNAME的name
        let rname = cname.replace(DIRNAME, '')
        argConfig.forEach((key) => {
            opt[key] = options[key]
        })
        let componentSrc = path.join(path.relative(`./test/component/${rname}`, cname), 'component.js')
        let utilSrc = path.join(path.relative(`./tools/template/test/${{name}}`, './test'), 'util.js')
        console.log('utilSrc', utilSrc)
        console.log('componentSrc', componentSrc)
        let op = {...opt, name, componentSrc, utilSrc}
        addFiles('./tools/template/{{name}}', cname, op)
        addFiles('./tools/template/test/{{name}}', `./test/component/${rname}`, op)
        addFiles('./tools/template/test/util.js', `./test/`, op)
    })

program.parse(process.argv)

function addFiles(from, to, options){

    loopSrc(from, undefined, (from) => {
        
        fs.readFile(from, (err, data) => {
            let name = path.basename(from)
            let fileTo = path.join(to, name)
            createFolders(fileTo)
            if(fs.existsSync(fileTo)){
                return
            }
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



