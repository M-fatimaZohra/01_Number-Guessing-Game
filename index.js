#!  /usr/bin/env node
import inquirer from "inquirer";
const botGuess = Math.random() * 10;
const roundOf = Math.ceil(botGuess);
console.log(`🎶Guess number from 0 to 10 and test your luck🎶`);
const result = await inquirer.prompt([
  {
    name: "GuessNumber",
    type: "number",
    message: "Test you luck by puting a random number ✍ ",
  },
]);
console.log(`\n`);
console.log(`YOUR GUESS NUMBER IS ${result.GuessNumber}`);
console.log(`\n`);
if (roundOf === result.GuessNumber) {
  console.log(`-------------------------------`);
  console.log(`|${roundOf} = ${result.GuessNumber}🎉 you are a lucky 🎉| \n`);
  console.log(`-------------------------------`);
} else {
  console.log(`-------------------------------`);
  console.log(`|${roundOf} ≠ ${result.GuessNumber}  😢 BETTER LUCK NEXT TIME|`);
  console.log(`-------------------------------`);
}
