const { program } = require('commander')
const { createProjectAction, addComponentAction, addPageAndRouteAction,
  addStoreAction } = require('./actions')
const createCommans = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program
    .command('addcpn <name>')
    .description('add vue component, ex: whj appcpn HelloWorld -d src/components')
    .action((name) => {
      addComponentAction(name, program.dest || 'src/components')
    })

  program
    .command('addpage <page>')
    .description('add vue page and router config, ex: whj apppage Home [-d src/pages]')
    .action((page) => {
      addPageAndRouteAction(page, program.dest || `src/pages`)
    })

  program
    .command('addstore <store>')
    .description('add vue storeconfig, ex: whj appstore Home [-d src/stores]')
    .action((store) => {
      addStoreAction(store, program.dest || `src/store/modules`)
    })
}

module.exports = createCommans