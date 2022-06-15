const { program } = require('commander')
const { createProjectAction, addCpnAction } = require('./actions')
const createCommans = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component, ex: whj appcpn HelloWorld -d src/components')
    .action(addCpnAction)
}

module.exports = createCommans