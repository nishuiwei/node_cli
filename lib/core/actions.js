const { promisify } = require('util')
const { commandSpawn } = require('../utils/terminal')
const download = promisify(require('download-git-repo'))
const open = require('open')
const { vueRepo } = require('./../config/repo-config')
const { compile, writeToFile } = require('../utils/utils')
const path = require('path')

// 创建模版
const createProjectAction = async (project) => {
  console.log('whj helps you create your project- ')
  // 1. git clone 项目
  await commandSpawn('git', ['clone', 'https://github.com/nishuiwei/hj-vue-template.git', project])
  // 2. 执行 npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], {
    cwd: `./${project}`
  })
  // 3. 运行 npm run dev
  commandSpawn(command, ['run', 'dev'], {
    cwd: `./${project}`
  })
  // 4. 打开浏览器
  open('http://localhost:3001')
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1. 编译ejs模版 result
  const result = await compile("vue-component.ejs", {name, lowerName: name.toLowerCase()})
  // 2. 将result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`)
  await writeToFile(targetPath, result)
}

module.exports = {
  createProjectAction,
  addComponentAction
}