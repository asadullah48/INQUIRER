import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([
  {
    name: "age",
    type: "number",
    message: "Enter your age to continue",
  },
]);
console.log(
  " In shaa Allah, in " + (70 - answers.age) + "years you will be 70 years old"
);
console.log(
  chalk.greenBright.underline.italic.bold.overline(
    "Insha Allah, in " + (70 - answers.age) + " years you will be 70 years old."
  )
);
