const { program } = require('commander')
const { createProjectAction } = require('./actions')
const createCommans = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)
}

module.exports = createCommans