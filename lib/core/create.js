const { program } = require('commander')
const { createProjectAction, addComponentAction } = require('./actions')
const createCommans = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component, ex: whj appcpn HelloWorld -d src/components')
    .action(addComponentAction)
}

module.exports = createCommans