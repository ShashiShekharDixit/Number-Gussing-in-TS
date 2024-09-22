import inquirer from "inquirer";

type ansType = {
    userGuess : number 
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers :  ansType = await inquirer.prompt([
    {
    type: "number",
    name: "userNumber",
    message: "Write Your guess: "
    } 
])

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, "Sys")
if(userGuess === systemGeneratedNo){
    console.log("Your anwser is correct \n You Won!")
} else {
    console.log("Your anwser is incorrect \n Try Again!")
}