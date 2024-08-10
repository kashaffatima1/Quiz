import inquirer from "inquirer"

console.log("WELCOME TO QUIZ!");


const quiz : {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
       name: "question_1",
       type: "list",
       message: "Q1: What starts with E and ends with E but only has one letter in it? ",
       choices: ["Envelope", "Egg", "Elephant"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2 :What can be broken but never held? ",
        choices: [ "Glass", "Promise", "Bag"]
     },
     {
        name: "question_3",
        type: "list",
        message: "Q3: Which word in the dictionary is always spelled incorrectly? ",
        choices: ["Mistaken", "Incorrectly", "Dictionary"]
     },
     {
        name: "question_4",
        type: "list",
        message: "Q4: If I drink, I die. If I eat, I’m fine. What am I? ",
        choices: ["Sun", "Fire", "Stove"]
     },
     {
        name: "question_5",
        type: "list",
        message: "Q5: What’s full of holes but can still hold liquid?",
        choices: ["Sponge", "Tissue Paper", "Wet"]
     }
]);



let score: number = 0;

switch (quiz.question_1){
    case "Envelope":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");
            
}
switch (quiz.question_2){
    case "Promise":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
            
}
switch (quiz.question_3){
    case "Incorrectly":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");
            
}
switch (quiz.question_4){
    case "Fire":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");
            
}
switch (quiz.question_5){
    case "Sponge":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect!");
            
}

            
console.log(`Score: ${score}`);
