#!/usr/lib/env node
const shell = require('shelljs');
const commander = require('commander');
const download = require('download-git-repo');
const ora = require('ora');
const fs = require('fs');
const colors = require('colors')
const path = require('path');
const spinner = ora();
const chalk = require('chalk')
const version = require("../package.json").version;
const execSync = require("child_process").execSync
const mode = require("./util").mode
const type = require("./util").type
const ncp = require("ncp")
commander
  .version(version, "-V, --version")
  .usage("[Options] | [Commands] <file>");

commander.on("--help",function () {
  console.log("\n EXamples");
  console.log("\n Examples:");
  console.log("");
  console.log("  $ snake -h");
  console.log("  $ snake init snake-demo ");
  console.log("");
})

function help() {
  commander.parse(process.argv);
  if (commander.args.length < 1) return commander.help();
}
function doCopyDir (dir,projectName){
  const spinner = ora("init project");
  spinner.start();
  ncp.ncp(dir,projectName,(err) => {
    if(err){
      console.log(err);
      process.exit()
    }
    spinner.stop();
    console.log();
    console.log("Project init finished".green);
    console.log("=====================".green);
    console.log();
    console.log("To get started");
    console.log();
    console.log(`    cd ${projectName}`.red);
    console.log("    yarn && npm run start".red);
  })
}
commander
  .command('init')
  .description('Generate a new project')
  .option('dir');
const release = async () => {
  const nodeVersion = execSync("node -v", { encoding: "utf8"});
  if (process.argv.length === 2) {
    execSycnc("snake -h");
  }
  if ( Number(nodeVersion.split(".")[0]) < 8) {
    console.log("Please make sure the node version is above 8.0".red);
    process.exit();
  }
  const argv2 = process.argv[2];
  const argv3 = process.argv[3];
  if (argv2 === "init") {
    let projectName = argv3;
    if(fs.existsSync(projectName)){
      console.log(
        "\n the dir has exists, please input another one".green + "\n"
      );
      process.exit();
    }
    const selectMode = await mode()
    fs.mkdirSync(projectName)
    const currentPath = path.resolve(__dirname,"..")
    const copyedDir = currentPath + type(selectMode.flag);
    doCopyDir(copyedDir,projectName)
  }
}

release().catch(err => {
  console.error(err);
  process.exit();
});

commander.parse(process.argv);
