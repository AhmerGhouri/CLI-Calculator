import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import figlet, { text } from "figlet";
import error, { Console } from "console";

let animation = chalkAnimation.rainbow("Calculator CLI")
animation;

setTimeout(() => {

    animation.stop()
}, 1000)



let number1 = await inquirer.prompt({

    name: "number",
    type: "number",
    message: "Enter Your Number"

})

let number2 = await inquirer.prompt({

    name: "number2",
    type: "number",
    message: "Enter Your Second Number?"


})

let operator = await inquirer.prompt({

    name: "operator",
    type: "input",
    message: "Enter Your Operator"



})




switch (operator.operator) {

    case "*":
        console.log(number1.number * number2.number2)
        break;

    case "/":
        console.log(number1.number / number2.number2);
        break;

    case "-":
        console.log(number1.number - number2.number2);
        break;

    case "+":
        console.log(number1.number + number2.number2);
        break;

    case "%":
        console.log(number1.number % number2.number2);
        break;

    default:

        console.log("Please Enter Valid Operator");
        console.log(operator.operator);
       break;
}







