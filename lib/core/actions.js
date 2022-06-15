const { promisify } = require('util')
const { commandSpawn } = require('../utils/terminal')
const download = promisify(require('download-git-repo'))
const open = require('open')
const { vueRepo } = require('./../config/repo-config')

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
const addCpnAction = (name, dest) => {
  // 1. 对应的ejs模版
  
  // 2. 编译ejs模版 result
  // 3. 将result写入到.vue文件中
  // 4. 放到对应的文件夹中
}

module.exports = {
  createProjectAction,
  addCpnAction
}