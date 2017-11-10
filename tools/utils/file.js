let path = require("path")
let fs = require("fs")
let loopSrc = require("./loopSrc")
let createFolders = require("./createFolders")

/**
 * 删除文件
 * @param {string} file 
 */
function removeFiles(file) {
  if (!fs.existsSync(file)) {
    console.log(`file ${file} not exist.`)
    return
  }
  if (fs.statSync(file).isDirectory()) {
    let files = fs.readdirSync(file)

    files.forEach(f => {
      let curSrc = path.join(file, f)
      removeFiles(curSrc)
    })
    fs.rmdirSync(file)
    return
  }

  try {
    fs.unlinkSync(file)
    console.log(`remove file ${file} sucess.`)
  } catch (e) {
    console.log(e)
  }
}

function addFiles(from, to, options) {
  loopSrc(from, undefined, from => {
    fs.readFile(from, (err, data) => {
      let name = path.basename(from)
      let fileTo = path.join(to, name)
      createFolders(fileTo)
      if (fs.existsSync(fileTo)) {
        return
      }
      let d = data.toString()
      Object.keys(options).forEach(key => {
        let reg = new RegExp(`{{${key}}}`, "g")
        d = d.replace(reg, options[key])
      })
      writeFile(fileTo, d)
    })
  })
}

function writeFile(src, data) {
  if (fs.existsSync(src)) {
    return
  }
  fs.writeFile(src, data, err => {
    if (err) {
      console.log("fail to copy file to %s", src)
      return
    }
    console.log("generate file %s success", src)
  })
}

/**
 * 
 * @param {string} src test.js src
 * @param {string} cname component name
 */
function addTestEntry(src, cname){
  var asrc = path.resolve(process.cwd(), src)
  
  if (!fs.existsSync(asrc)) {
    createFolders(asrc)
    fs.writeFileSync(asrc, '')
  }

  let content = fs.readFileSync(asrc).toString()
  let reg = /\n$/
  if(!content&&reg.test(content)){
    content += '\n'
  }
  content += `import './component/${cname}/test.js'\n`
  fs.writeFile(asrc, content, (err) => {
    if(err) console.log(err)
  })
}


function removeImportFromTest(src, cname){
  var asrc = path.resolve(process.cwd(), src)
  
  if (!fs.existsSync(asrc)) {
    createFolders(asrc)
    fs.writeFileSync(asrc, '')
  }
  let content = fs.readFileSync(asrc).toString()
  let rep = `import './component/${cname}/test.js'\n`
  let ret = new RegExp(`import './component/${cname}/test.js'[\n]*`, 'g')
  fs.writeFile(asrc, content.replace(rep, ''), (err) => {
    if(err) console.log(err)
  })
}


// addTestEntry('./test.js', 'Button5')

module.exports = {
  addFiles,
  removeFiles,
  writeFile,
  addTestEntry,
  removeImportFromTest
}
