const { default: chalk } = require("chalk");

const log = console.log;
//combinando colores con strings 
log(chalk.blue('Hello', ' World!'));
log(chalk.inverse('Hello', ' World!'));