

/******************************************
 *  Author : Author   
 *  Created On : Thu Oct 12 2017
 *  File : index.js
 *******************************************/
// component button -t ./src/component

let path = require('path')
let program = require('commander')
let { addFiles, removeFiles, addTestEntry, removeImportFromTest} = require('./utils/file')
let createFolders = require('./utils/createFolders')

let argConfig = require('./config/argConfig.js')
program.version('0.1.0')
        .usage('create component')
        .description('create component files')

const DIRNAME = './src/component/'
const TEST_DIRNAME = './test/component'
program
    .command("component <cname>")
    .alias("cp")
    .description("create component files")
    .option("-a, --author <value>", "author")
    .option("-e, --email <value>", "email")
   
    /**
     * cname component name
     */
    .action(function(cname, options) {
        // //only component name
        // if(path.basename(cname) === cname){
            
        // }
        
        //component src
        let cSrc = componentSrcByName(cname)
        let tSrc = testSrcByName(cname)

        createFolders(cSrc)
        
        let opt = {}
        let name = path.basename(cSrc)
        argConfig.forEach((key) => {
            opt[key] = options[key]
        })

        let componentSrc = path.join(path.relative(tSrc, cSrc), 'component.js')
        let utilSrc = path.join(path.relative(tSrc, './test'), 'util.js')
        
        let op = {...opt, name, componentSrc, utilSrc}
        addFiles('./tools/template/component', cSrc, op)
        addFiles('./tools/template/test/component', tSrc, op)
        addFiles('./tools/template/test/util.js', `./test/`, op)
        addTestEntry('./test/test.js', cname)
    })

program
    .command('remove <cname>')
    .alias('rm')
    .description('remove component')
    .action(function(cname){

        let cSrc = componentSrcByName(cname)
        let tSrc = testSrcByName(cname)

        removeFiles(cSrc)
        removeFiles(tSrc)
        removeImportFromTest('./test/test.js', cname)
    })
program.parse(process.argv)

function componentSrcByName(cname){
    return path.resolve(DIRNAME, cname)
}

function testSrcByName(cname){
    return path.resolve(TEST_DIRNAME, cname)
}




