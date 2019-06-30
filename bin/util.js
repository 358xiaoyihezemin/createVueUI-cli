const inquirer = require('inquirer');
exports.mode = async function () {
  console.log(999)
  return await inquirer.prompt([{
    name: "flag",
    message: "select a mode",
    type: "list",
    choices:[
      {
        name: "vue + vue-router + vuex + typeScript",
        value: "vueProject"
      },
      {
        name: "vue + vw",
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