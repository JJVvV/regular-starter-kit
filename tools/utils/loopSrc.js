let fs = require('fs')

/**
 * 遍历文件夹
 * @param {String} from 
 * @param {Function} filter 
 * @param {Function} callback 
 */
function loopSrc(from, filter=()=>{return true}, callback){
    
  
    if(!fs.existsSync(from)) {
        console.log(`file not exit: ${from}`)
        return
    }
    if(fs.statSync(from).isDirectory()){
        
        let files = fs.readdirSync(from)
        files.forEach((file, index) => {
           let curPath = `${from}/${file}`
           loopSrc(curPath, filter, callback)
        })
    }else{
        
        if(filter(from)) callback(from)
    }
}

module.exports = loopSrc