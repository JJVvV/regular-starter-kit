let path = require("path")
let fs = require("fs")

let createFolders = to => {
  let sep = path.sep,
    folder = "",
    folders

  if (path.extname(to) !== "") {
    to = path.dirname(to)
  }
  folders = to.split(sep)
  while (folders.length) {
    folder += folders.shift() + sep
    if (!fs.existsSync(folder)) {
      // exec('')
      fs.mkdirSync(folder)
    }
  }
}

module.exports = createFolders
