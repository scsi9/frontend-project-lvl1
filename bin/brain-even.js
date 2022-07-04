import readlineSync from 'readline-sync'

let max = 1000;
let randomNumber = function getRandomInt() {
    return Math.floor(Math.random() * max);
};

console.log('Welcome to the Brain Games!')
let name = readlineSync.question('Your name? ');
let welcomeEven = ('Answer "yes" if number even otherwise answer "no"');
console.log('Hello' + ' ' + name)
console.log(welcomeEven)

for (let i = 0; i <= 3;) {

    let end = ('Congratulations, ' + name + '!')
    if (i === 3) {
        console.log(end);
        break;
    }
    let temp = randomNumber();
    console.log("Qestion:" + ' ' + temp);
    let yourAnswer = readlineSync.keyInYN('Your answer:');
    
    
    if (temp % 2 === 0 && yourAnswer === true) {
        console.log('Correct');
        i++;
    } else if (temp % 2 != 0 && yourAnswer === false) {
        console.log('Correct');
        i++;
    } else {
        console.log('yes is wrong answer . Correct answer was no. \n Lets try again, ' + name + '!');
        break;
    }

}

