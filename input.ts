import inquirer from "inquirer";
export const answer = await inquirer.prompt([
    { message: "Enter your first Number", type: "number", name: "firstNumber" },
    { message: "Enter your second Number", type: "number", name: "secondNumber" },
    {
      message: "select one of the operator to calculate the sum",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);