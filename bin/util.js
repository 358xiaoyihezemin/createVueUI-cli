const inquirer = require('inquirer');
exports.mode = async function () {
  return await inquirer.prompt([{
    name: "flag",
    message: "select a mode",
    type: "list",
    choices:[
      {
        name: "创建一个项目(vue + vue-router + vuex + typeScript)",
        value: "vueProject"
      },
      {
        name: "创建一个组件库(vue)",
        value: "vueComponent"
      }
    ]
  }])
}

exports.type = function (mode) {
  return{
    vueProject: "/src/vueProject",
    vueComponent: "/src/vueComponent"
  }[mode]
}