const ejs = require('ejs')
const path = require('path')
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

module.exports = {
  compile
}