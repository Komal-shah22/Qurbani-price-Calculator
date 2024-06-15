import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.bgWhite.blue(`\t ~~~~~~~~~~~~~ WELCOME TO ~~~~~~~~~~~~  `));
console.log(chalk.bold.bgWhite.blue(`\t ~~~~~~~Qurbani Price Calculater~~~~~~~ \n\n`));
console.log(chalk.bold.italic.bgRed(`GOAT\t`), chalk.bold.italic.bgCyan(`SHEEP\t`), chalk.bold.italic.bgBlue(`COW\t`), chalk.bold.italic.bgMagenta(`BUFFALO\t`), chalk.bold.italic.bgGreen(`CAMEL\n`));
let condition = true;
while (condition) {
    const select = await inquirer.prompt([
        {
            name: 'meet',
            type: 'list',
            message: chalk.bgYellowBright.italic.magentaBright('Select Your Qurbani Animal :\n'),
            choices: ['Goat', 'Sheep', 'Cow', 'Buffalo', 'Camel', 'Exit']
        }
    ]);
    if (select.meet === 'GOAT') {
        console.log(chalk.bold.bgMagenta(select.meet));
    }
    else if (select.meet === 'Sheep') {
        console.log(chalk.bold.bgGray(select.meet));
    }
    else if (select.meet === 'Cow') {
        console.log(chalk.bold.bgYellow(select.meet));
    }
    else if (select.meet === 'Buffalo') {
        console.log(chalk.bold.bgGreen(select.meet));
    }
    else if (select.meet === 'Camel') {
        console.log(chalk.bold.bgRed(select.meet));
    }
    else if (select.meet === 'Exit') {
        console.log(chalk.bold.italic.bgWhite.bgBlackBright(`<<<============Thanks for using===========>>>\n`));
        process.exit();
    }
    const qus = await inquirer.prompt([
        {
            name: 'perkg',
            type: 'input',
            message: chalk.bold.italic.yellowBright(`what is the price for 1kg of ${select.meet} ?\n`),
            validate: (val) => {
                const numInput = Number(val);
                if (isNaN(val) || numInput <= 0) {
                    return `Goat price must be number and cannot be zero or negative`;
                }
                return true;
            }
        }
    ]);
    const weight = await inquirer.prompt([
        {
            name: 'weight',
            type: 'input',
            message: chalk.bold.italic.blueBright(`Enter the whole weight of your ${select.meet} in kg :\n`),
            validate: (val) => {
                const Gweight = Number(val);
                if (isNaN(val) || Gweight <= 0 || Gweight > 800) {
                    return `Invalid weight`;
                }
                return true;
            }
        }
    ]);
    const cal = qus.perkg * weight.weight;
    console.log(chalk.bold.italic.bgRedBright.white(`The price of ${weight.weight} kg ${select.meet} is : Rs.${cal}\n\n`));
}
