const path = require('path')
const fs = require('fs')

const ejs = require('ejs')

const compile = (templateName, data) => {
  const templatePosition = `../template/${templateName}`
  const templatePath = path.resolve(__dirname, templatePosition)
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

const createDirSync = (pathName) => {
  if(fs.existsSync(pathName)) {
    return true
  } else {
    // console.log(path.dirname(pathName))
    if(createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName)
      return true
    }
  }
}

const writeToFile = (path, content) => {
  if (fs.existsSync(path)) {
    console.error("the file already exists~")
    return;
  }
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile,
  createDirSync
}